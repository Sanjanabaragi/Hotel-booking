namespace HotelBooking.Models;

public class Room
{
    public int RoomId { get; set; }
    public int HotelId { get; set; }
    public int RoomTypeId { get; set; }
    public string RoomNumber { get; set; } = string.Empty;
    public decimal PricePerNight { get; set; }
    public int Capacity { get; set; }
    public bool IsAvailable { get; set; }

    public Hotel? Hotel { get; set; }
    public RoomType? RoomType { get; set; }
    public ICollection<RoomAmenity> RoomAmenities { get; set; } = new List<RoomAmenity>();
    public ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
