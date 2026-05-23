using HotelBooking.Data;
using HotelBooking.Models;

namespace HotelBooking.Repositories;

public class PaymentRepository : Repository<Payment>, IPaymentRepository
{
    public PaymentRepository(HotelBookingContext db) : base(db)
    {
    }
}
