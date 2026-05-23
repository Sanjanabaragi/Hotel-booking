using HotelBooking.DTOs.Payment;

namespace HotelBooking.Validators;

public static class PaymentValidator
{
    public static (bool IsValid, string? Error) Validate(PaymentRequestDto dto)
    {
        if (dto.Amount <= 0) return (false, "Amount must be greater than zero");
        if (string.IsNullOrWhiteSpace(dto.PaymentMethod)) return (false, "Payment method is required");
        return (true, null);
    }
}
