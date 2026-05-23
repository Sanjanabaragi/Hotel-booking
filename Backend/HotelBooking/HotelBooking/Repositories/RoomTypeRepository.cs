using HotelBooking.Data;
using HotelBooking.Models;

namespace HotelBooking.Repositories;

public class RoomTypeRepository : Repository<RoomType>, IRoomTypeRepository
{
    public RoomTypeRepository(HotelBookingContext db) : base(db)
    {
    }
}
