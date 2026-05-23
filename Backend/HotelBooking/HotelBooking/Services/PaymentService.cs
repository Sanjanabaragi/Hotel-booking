using AutoMapper;
using HotelBooking.Data;
using HotelBooking.DTOs.Payment;
using HotelBooking.Interfaces;
using HotelBooking.Models;
using HotelBooking.Validators;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Services;

public class PaymentService : IPaymentService
{
    private readonly HotelBookingContext _db;
    private readonly IMapper _mapper;

    public PaymentService(HotelBookingContext db, IMapper mapper)
    {
        _db = db;
        _mapper = mapper;
    }

    public async Task<(bool Success, string Message, PaymentResponseDto? Data)> ProcessPaymentAsync(PaymentRequestDto dto)
    {
        var valid = PaymentValidator.Validate(dto);
        if (!valid.IsValid) return (false, valid.Error ?? "Invalid", null);

        var booking = await _db.Bookings.Include(b => b.Payment).FirstOrDefaultAsync(b => b.BookingId == dto.BookingId);
        if (booking == null) return (false, "Booking not found", null);

        // simple payment simulation
        var payment = new Payment
        {
            BookingId = dto.BookingId,
            Amount = dto.Amount,
            PaymentDate = DateTime.UtcNow,
            PaymentMethod = dto.PaymentMethod,
            PaymentStatus = "Completed",
            TransactionId = Guid.NewGuid().ToString()
        };

        _db.Payments.Add(payment);
        booking.Payment = payment;
        await _db.SaveChangesAsync();

        return (true, string.Empty, _mapper.Map<PaymentResponseDto>(payment));
    }
}
