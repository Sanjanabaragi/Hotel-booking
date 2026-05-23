using HotelBooking.DTOs.Report;

namespace HotelBooking.Interfaces;

public interface IReportService
{
    Task<IEnumerable<BookingReportDto>> GetBookingReportAsync();
    Task<RevenueReportDto> GetRevenueReportAsync();
    Task<IEnumerable<OccupancyReportDto>> GetOccupancyReportAsync();
}
