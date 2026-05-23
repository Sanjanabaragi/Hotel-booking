using HotelBooking.Data;
using HotelBooking.Models;

namespace HotelBooking.Repositories;

public class RoomRepository : Repository<Room>, IRoomRepository
{
    public RoomRepository(HotelBookingContext db) : base(db)
    {
    }
}
