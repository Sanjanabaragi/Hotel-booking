using AutoMapper;
using HotelBooking.DTOs.Booking;
using HotelBooking.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HotelBooking.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookingsController : ControllerBase
{
    private readonly IBookingService _bookingService;
    private readonly IMapper _mapper;

    public BookingsController(IBookingService bookingService, IMapper mapper)
    {
        _bookingService = bookingService;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateBookingDto dto)
    {
        var booking = await _bookingService.CreateAsync(dto);
        return CreatedAtAction(nameof(Get), new { id = booking.BookingId }, booking);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id) => Ok(await _bookingService.GetByIdAsync(id));

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _bookingService.GetAllAsync());

    [HttpPost("cancel")]
    public async Task<IActionResult> Cancel([FromBody] HotelBooking.DTOs.Booking.CancelBookingDto dto)
    {
        await _bookingService.CancelAsync(dto);
        return NoContent();
    }
}
