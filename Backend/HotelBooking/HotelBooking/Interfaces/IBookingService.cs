using HotelBooking.DTOs.Booking;

namespace HotelBooking.Interfaces;

public interface IBookingService
{
    Task<BookingResponseDto> CreateAsync(CreateBookingDto dto);
    Task<BookingResponseDto?> GetByIdAsync(int id);
    Task<IEnumerable<BookingResponseDto>> GetAllAsync();
    Task CancelAsync(CancelBookingDto dto);
}
