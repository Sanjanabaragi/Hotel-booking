namespace HotelBooking.Models.Enums;

public enum BookingStatus
{
    Pending = 0,
    Confirmed = 1,
    Cancelled = 2
}

public enum PaymentStatus
{
    Pending = 0,
    Completed = 1,
    Failed = 2,
    Refunded = 3
}

public enum PaymentMethod
{
    Unknown = 0,
    Card = 1,
    BankTransfer = 2,
    Cash = 3
}

public enum UserRole
{
    Guest = 0,
    Customer = 1,
    Admin = 2
}
