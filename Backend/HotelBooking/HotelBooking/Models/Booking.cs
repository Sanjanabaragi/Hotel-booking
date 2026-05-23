namespace HotelBooking.Models;

public class Booking
{
    public int BookingId { get; set; }
    public int UserId { get; set; }
    public int RoomId { get; set; }
    public DateTime CheckInDate { get; set; }
    public DateTime CheckOutDate { get; set; }
    public int GuestsCount { get; set; }
    public decimal TotalAmount { get; set; }
    public string BookingStatus { get; set; } = string.Empty;
    public DateTime BookingDate { get; set; }

    public User? User { get; set; }
    public Room? Room { get; set; }
    public Payment? Payment { get; set; }
    public Cancellation? Cancellation { get; set; }
}
