using AutoMapper;
using HotelBooking.Data;
using HotelBooking.DTOs.User;
using HotelBooking.Interfaces;
using HotelBooking.Models;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Services;

public class UserService : IUserService
{
    private readonly HotelBookingContext _db;
    private readonly IMapper _mapper;

    public UserService(HotelBookingContext db, IMapper mapper)
    {
        _db = db;
        _mapper = mapper;
    }

    public async Task<IEnumerable<UserResponseDto>> GetAllAsync()
    {
        var list = await _db.Users.ToListAsync();
        return _mapper.Map<IEnumerable<UserResponseDto>>(list);
    }

    public async Task<UserResponseDto?> GetByIdAsync(int id)
    {
        var u = await _db.Users.FindAsync(id);
        return u == null ? null : _mapper.Map<UserResponseDto>(u);
    }

    public async Task UpdateAsync(int id, DTOs.User.UpdateUserDto dto)
    {
        var u = await _db.Users.FindAsync(id);
        if (u == null) return;
        _mapper.Map(dto, u);
        await _db.SaveChangesAsync();
    }
}
