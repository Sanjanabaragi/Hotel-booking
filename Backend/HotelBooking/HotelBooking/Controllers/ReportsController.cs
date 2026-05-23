using HotelBooking.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HotelBooking.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReportsController : ControllerBase
{
    private readonly IReportService _reportService;

    public ReportsController(IReportService reportService)
    {
        _reportService = reportService;
    }

    [HttpGet("bookings")]
    public async Task<IActionResult> BookingReport() => Ok(await _reportService.GetBookingReportAsync());

    [HttpGet("revenue")]
    public async Task<IActionResult> RevenueReport() => Ok(await _reportService.GetRevenueReportAsync());

    [HttpGet("occupancy")]
    public async Task<IActionResult> OccupancyReport() => Ok(await _reportService.GetOccupancyReportAsync());
}
