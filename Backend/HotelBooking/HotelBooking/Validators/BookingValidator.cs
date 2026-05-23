using HotelBooking.DTOs.Booking;

namespace HotelBooking.Validators;

public static class BookingValidator
{
    public static (bool IsValid, string? Error) Validate(CreateBookingDto dto)
    {
        if (dto.CheckInDate.Date >= dto.CheckOutDate.Date) return (false, "Check-out must be after check-in");
        if (dto.CheckInDate.Date < DateTime.UtcNow.Date) return (false, "Check-in cannot be in the past");
        if (dto.GuestsCount <= 0) return (false, "Guests count must be at least 1");
        return (true, null);
    }
}
