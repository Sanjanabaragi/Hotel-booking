using HotelBooking.Data;
using HotelBooking.Models;

namespace HotelBooking.Repositories;

public class AmenityRepository : Repository<Amenity>, IAmenityRepository
{
    public AmenityRepository(HotelBookingContext db) : base(db)
    {
    }
}
