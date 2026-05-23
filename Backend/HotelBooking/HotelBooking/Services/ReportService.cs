using AutoMapper;
using HotelBooking.Data;
using HotelBooking.DTOs.Report;
using HotelBooking.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Services;

public class ReportService : IReportService
{
    private readonly HotelBookingContext _db;
    private readonly IMapper _mapper;

    public ReportService(HotelBookingContext db, IMapper mapper)
    {
        _db = db;
        _mapper = mapper;
    }

    public async Task<IEnumerable<BookingReportDto>> GetBookingReportAsync()
    {
        var list = await _db.Bookings.ToListAsync();
        return _mapper.Map<IEnumerable<BookingReportDto>>(list);
    }

    public async Task<RevenueReportDto> GetRevenueReportAsync()
    {
        var total = await _db.Bookings.SumAsync(b => b.TotalAmount);
        return new RevenueReportDto { PeriodStart = DateTime.UtcNow.AddMonths(-1), PeriodEnd = DateTime.UtcNow, TotalRevenue = total };
    }

    public async Task<IEnumerable<OccupancyReportDto>> GetOccupancyReportAsync()
    {
        // naive occupancy calculation
        var rooms = await _db.Rooms.ToListAsync();
        var reports = new List<OccupancyReportDto>();
        foreach (var r in rooms)
        {
            var occupied = await _db.Bookings.Where(b => b.RoomId == r.RoomId).SumAsync(b => (int)(b.CheckOutDate - b.CheckInDate).TotalDays);
            reports.Add(new OccupancyReportDto { RoomId = r.RoomId, OccupiedNights = occupied, TotalNights = 30 });
        }
        return reports;
    }
}
