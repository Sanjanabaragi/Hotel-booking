namespace HotelBooking.DTOs.Payment;

public class RefundDto
{
    public int BookingId { get; set; }
    public decimal Amount { get; set; }
}
