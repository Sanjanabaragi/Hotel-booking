namespace HotelBooking.DTOs.Booking;

public class CancelBookingDto
{
    public int BookingId { get; set; }
    public string Reason { get; set; } = string.Empty;
}
