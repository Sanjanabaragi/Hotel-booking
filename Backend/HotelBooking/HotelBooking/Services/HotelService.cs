using AutoMapper;
using HotelBooking.Data;
using HotelBooking.DTOs.Hotel;
using HotelBooking.Interfaces;
using HotelBooking.Models;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Services;

public class HotelService : IHotelService
{
    private readonly HotelBookingContext _db;
    private readonly IMapper _mapper;

    public HotelService(HotelBookingContext db, IMapper mapper)
    {
        _db = db;
        _mapper = mapper;
    }

    public async Task<HotelResponseDto> CreateAsync(CreateHotelDto dto)
    {
        var entity = _mapper.Map<Hotel>(dto);
        _db.Hotels.Add(entity);
        await _db.SaveChangesAsync();
        return _mapper.Map<HotelResponseDto>(entity);
    }

    public async Task DeleteAsync(int id)
    {
        var h = await _db.Hotels.FindAsync(id);
        if (h == null) return;
        _db.Hotels.Remove(h);
        await _db.SaveChangesAsync();
    }

    public async Task<IEnumerable<HotelResponseDto>> GetAllAsync()
    {
        var list = await _db.Hotels.ToListAsync();
        return _mapper.Map<IEnumerable<HotelResponseDto>>(list);
    }

    public async Task<HotelResponseDto?> GetByIdAsync(int id)
    {
        var h = await _db.Hotels.FindAsync(id);
        return h == null ? null : _mapper.Map<HotelResponseDto>(h);
    }

    public async Task UpdateAsync(int id, UpdateHotelDto dto)
    {
        var h = await _db.Hotels.FindAsync(id);
        if (h == null) return;
        _mapper.Map(dto, h);
        await _db.SaveChangesAsync();
    }
}
