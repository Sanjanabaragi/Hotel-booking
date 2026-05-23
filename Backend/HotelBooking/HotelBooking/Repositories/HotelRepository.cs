using HotelBooking.Data;
using HotelBooking.Models;

namespace HotelBooking.Repositories;

public class HotelRepository : Repository<Hotel>, IHotelRepository
{
    public HotelRepository(HotelBookingContext db) : base(db)
    {
    }
}
