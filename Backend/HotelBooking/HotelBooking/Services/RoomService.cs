using AutoMapper;
using HotelBooking.Data;
using HotelBooking.DTOs.Room;
using HotelBooking.Interfaces;
using HotelBooking.Models;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Services;

public class RoomService : IRoomService
{
    private readonly HotelBookingContext _db;
    private readonly IMapper _mapper;

    public RoomService(HotelBookingContext db, IMapper mapper)
    {
        _db = db;
        _mapper = mapper;
    }

    public async Task<RoomResponseDto> CreateAsync(CreateRoomDto dto)
    {
        var entity = _mapper.Map<Room>(dto);
        entity.IsAvailable = true;
        _db.Rooms.Add(entity);
        await _db.SaveChangesAsync();
        return _mapper.Map<RoomResponseDto>(entity);
    }

    public async Task DeleteAsync(int id)
    {
        var r = await _db.Rooms.FindAsync(id);
        if (r == null) return;
        _db.Rooms.Remove(r);
        await _db.SaveChangesAsync();
    }

    public async Task<IEnumerable<RoomResponseDto>> GetAllAsync()
    {
        var list = await _db.Rooms.ToListAsync();
        return _mapper.Map<IEnumerable<RoomResponseDto>>(list);
    }

    public async Task<RoomResponseDto?> GetByIdAsync(int id)
    {
        var r = await _db.Rooms.FindAsync(id);
        return r == null ? null : _mapper.Map<RoomResponseDto>(r);
    }

    public async Task UpdateAsync(int id, UpdateRoomDto dto)
    {
        var r = await _db.Rooms.FindAsync(id);
        if (r == null) return;
        _mapper.Map(dto, r);
        await _db.SaveChangesAsync();
    }

    public async Task<IEnumerable<RoomResponseDto>> CheckAvailabilityAsync(RoomAvailabilityDto dto)
    {
        var rooms = await _db.Rooms.Where(r => r.HotelId == dto.HotelId && r.IsAvailable && r.Capacity >= dto.GuestsCount).ToListAsync();
        // Exclude rooms that have bookings overlapping
        var overlapping = await _db.Bookings.Where(b => b.Room != null && b.Room.HotelId == dto.HotelId && !(b.CheckOutDate <= dto.CheckInDate || b.CheckInDate >= dto.CheckOutDate)).Select(b => b.RoomId).ToListAsync();
        var available = rooms.Where(r => !overlapping.Contains(r.RoomId));
        return _mapper.Map<IEnumerable<RoomResponseDto>>(available);
    }

    public async Task<IEnumerable<string>> GetTypesAsync()
    {
        return await _db.RoomTypes.Select(rt => rt.TypeName).ToListAsync();
    }

    public async Task<IEnumerable<string>> GetAmenitiesAsync()
    {
        return await _db.Amenities.Select(a => a.Name).ToListAsync();
    }
}
