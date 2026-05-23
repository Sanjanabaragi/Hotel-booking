using AutoMapper;
using HotelBooking.Data;
using HotelBooking.DTOs.Cancellation;
using HotelBooking.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Services;

public class CancellationService : ICancellationService
{
    private readonly HotelBookingContext _db;
    private readonly IMapper _mapper;

    public CancellationService(HotelBookingContext db, IMapper mapper)
    {
        _db = db;
        _mapper = mapper;
    }

    public async Task<CancellationResponseDto?> GetByBookingIdAsync(int bookingId)
    {
        var c = await _db.Cancellations.FirstOrDefaultAsync(ca => ca.BookingId == bookingId);
        return c == null ? null : _mapper.Map<CancellationResponseDto>(c);
    }
}
