using HotelBooking.DTOs.Room;

namespace HotelBooking.Interfaces;

public interface IRoomService
{
    Task<IEnumerable<RoomResponseDto>> GetAllAsync();
    Task<RoomResponseDto?> GetByIdAsync(int id);
    Task<RoomResponseDto> CreateAsync(CreateRoomDto dto);
    Task UpdateAsync(int id, UpdateRoomDto dto);
    Task DeleteAsync(int id);
    Task<IEnumerable<RoomResponseDto>> CheckAvailabilityAsync(RoomAvailabilityDto dto);
    Task<IEnumerable<string>> GetTypesAsync();
    Task<IEnumerable<string>> GetAmenitiesAsync();
}
