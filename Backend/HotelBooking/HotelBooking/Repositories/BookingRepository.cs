using HotelBooking.Data;
using HotelBooking.Models;

namespace HotelBooking.Repositories;

public class BookingRepository : Repository<Booking>, IBookingRepository
{
    public BookingRepository(HotelBookingContext db) : base(db)
    {
    }
}
