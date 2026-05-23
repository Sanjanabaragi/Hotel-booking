namespace HotelBooking.DTOs.Room;

public class UpdateRoomDto
{
    public int RoomTypeId { get; set; }
    public decimal PricePerNight { get; set; }
    public int Capacity { get; set; }
    public bool IsAvailable { get; set; }
}
