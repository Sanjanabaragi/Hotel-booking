using HotelBooking.DTOs.Cancellation;

namespace HotelBooking.Interfaces;

public interface ICancellationService
{
    Task<CancellationResponseDto?> GetByBookingIdAsync(int bookingId);
}
