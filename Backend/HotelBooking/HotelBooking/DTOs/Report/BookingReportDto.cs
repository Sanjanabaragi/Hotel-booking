namespace HotelBooking.DTOs.Report;

public class BookingReportDto
{
    public int BookingId { get; set; }
    public int RoomId { get; set; }
    public DateTime CheckInDate { get; set; }
    public DateTime CheckOutDate { get; set; }
    public decimal TotalAmount { get; set; }
}
