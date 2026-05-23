using HotelBooking.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HotelBooking.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CancellationsController : ControllerBase
{
    private readonly ICancellationService _cancellationService;

    public CancellationsController(ICancellationService cancellationService)
    {
        _cancellationService = cancellationService;
    }

    [HttpGet("{bookingId}")]
    public async Task<IActionResult> GetByBooking(int bookingId) => Ok(await _cancellationService.GetByBookingIdAsync(bookingId));
}
