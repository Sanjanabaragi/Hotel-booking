using AutoMapper;
using HotelBooking.Data;
using HotelBooking.DTOs.Booking;
using HotelBooking.Interfaces;
using HotelBooking.Models;
using HotelBooking.Validators;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Services;

public class BookingService : IBookingService
{
    private readonly HotelBookingContext _db;
    private readonly IMapper _mapper;

    public BookingService(HotelBookingContext db, IMapper mapper)
    {
        _db = db;
        _mapper = mapper;
    }

    public async Task<BookingResponseDto> CreateAsync(CreateBookingDto dto)
    {
        var valid = BookingValidator.Validate(dto);
        if (!valid.IsValid) throw new ArgumentException(valid.Error);

        // check room exists and availability
        var room = await _db.Rooms.FindAsync(dto.RoomId);
        if (room == null) throw new InvalidOperationException("Room not found");

        // check overlapping bookings
        var conflict = await _db.Bookings.AnyAsync(b => b.RoomId == dto.RoomId && !(b.CheckOutDate <= dto.CheckInDate || b.CheckInDate >= dto.CheckOutDate));
        if (conflict) throw new InvalidOperationException("Room is already booked for the selected dates");

        var booking = _mapper.Map<Booking>(dto);
        var nights = (dto.CheckOutDate.Date - dto.CheckInDate.Date).Days;
        booking.TotalAmount = nights * room.PricePerNight;
        booking.BookingStatus = "Confirmed";
        booking.BookingDate = DateTime.UtcNow;

        _db.Bookings.Add(booking);
        await _db.SaveChangesAsync();

        return _mapper.Map<BookingResponseDto>(booking);
    }

    public async Task CancelAsync(CancelBookingDto dto)
    {
        var booking = await _db.Bookings.Include(b => b.Payment).FirstOrDefaultAsync(b => b.BookingId == dto.BookingId);
        if (booking == null) throw new InvalidOperationException("Booking not found");
        if (booking.BookingStatus == "Cancelled") return;

        booking.BookingStatus = "Cancelled";
        var cancellation = new Cancellation { BookingId = booking.BookingId, CancelDate = DateTime.UtcNow, RefundAmount = booking.TotalAmount * 0.8m, Reason = dto.Reason };
        _db.Cancellations.Add(cancellation);
        // create refund logic - here we just set payment status if exists
        if (booking.Payment != null)
        {
            booking.Payment.PaymentStatus = "Refunded";
        }

        await _db.SaveChangesAsync();
    }

    public async Task<IEnumerable<BookingResponseDto>> GetAllAsync()
    {
        var list = await _db.Bookings.ToListAsync();
        return _mapper.Map<IEnumerable<BookingResponseDto>>(list);
    }

    public async Task<BookingResponseDto?> GetByIdAsync(int id)
    {
        var b = await _db.Bookings.FindAsync(id);
        return b == null ? null : _mapper.Map<BookingResponseDto>(b);
    }
}
