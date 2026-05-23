using HotelBooking.DTOs.User;

namespace HotelBooking.Interfaces;

public interface IUserService
{
    Task<IEnumerable<UserResponseDto>> GetAllAsync();
    Task<UserResponseDto?> GetByIdAsync(int id);
    Task UpdateAsync(int id, UpdateUserDto dto);
}
