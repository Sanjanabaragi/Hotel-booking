using HotelBooking.DTOs.Payment;

namespace HotelBooking.Interfaces;

public interface IPaymentService
{
    Task<(bool Success, string Message, PaymentResponseDto? Data)> ProcessPaymentAsync(PaymentRequestDto dto);
}
