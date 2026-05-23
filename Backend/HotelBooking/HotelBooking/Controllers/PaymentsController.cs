using HotelBooking.DTOs.Payment;
using HotelBooking.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HotelBooking.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PaymentsController : ControllerBase
{
    private readonly IPaymentService _paymentService;

    public PaymentsController(IPaymentService paymentService)
    {
        _paymentService = paymentService;
    }

    [HttpPost]
    public async Task<IActionResult> Pay([FromBody] PaymentRequestDto dto)
    {
        var result = await _paymentService.ProcessPaymentAsync(dto);
        if (!result.Success) return BadRequest(result.Message);
        return Ok(result.Data);
    }
}
