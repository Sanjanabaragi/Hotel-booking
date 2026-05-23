namespace HotelBooking.DTOs.Room;

public class RoomAvailabilityDto
{
    public int HotelId { get; set; }
    public DateTime CheckInDate { get; set; }
    public DateTime CheckOutDate { get; set; }
    public int GuestsCount { get; set; }
}
