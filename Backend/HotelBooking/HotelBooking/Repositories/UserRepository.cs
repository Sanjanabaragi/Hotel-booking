using HotelBooking.Data;
using HotelBooking.Models;

namespace HotelBooking.Repositories;

public class UserRepository : Repository<User>, IUserRepository
{
    public UserRepository(HotelBookingContext db) : base(db)
    {
    }
}
