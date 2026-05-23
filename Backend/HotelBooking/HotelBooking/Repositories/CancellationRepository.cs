using HotelBooking.Data;
using HotelBooking.Models;

namespace HotelBooking.Repositories;

public class CancellationRepository : Repository<Cancellation>, ICancellationRepository
{
    public CancellationRepository(HotelBookingContext db) : base(db)
    {
    }
}
