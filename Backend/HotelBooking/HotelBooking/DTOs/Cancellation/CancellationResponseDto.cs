namespace HotelBooking.DTOs.Cancellation;

public class CancellationResponseDto
{
    public int CancellationId { get; set; }
    public int BookingId { get; set; }
    public DateTime CancelDate { get; set; }
    public decimal RefundAmount { get; set; }
    public string? Reason { get; set; }
}
