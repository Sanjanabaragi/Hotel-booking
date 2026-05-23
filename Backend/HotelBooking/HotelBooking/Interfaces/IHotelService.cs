using HotelBooking.DTOs.Hotel;

namespace HotelBooking.Interfaces;

public interface IHotelService
{
    Task<IEnumerable<HotelResponseDto>> GetAllAsync();
    Task<HotelResponseDto?> GetByIdAsync(int id);
    Task<HotelResponseDto> CreateAsync(CreateHotelDto dto);
    Task UpdateAsync(int id, UpdateHotelDto dto);
    Task DeleteAsync(int id);
}
