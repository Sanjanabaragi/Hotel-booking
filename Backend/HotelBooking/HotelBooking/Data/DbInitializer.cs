using HotelBooking.Models;

namespace HotelBooking.Data;

public static class DbInitializer
{
    public static async Task SeedAsync(HotelBookingContext context)
    {
        if (context.Hotels.Any()) return; // already seeded

        var roomTypes = new List<RoomType>
        {
            new RoomType { TypeName = "Single", Description = "Single bed" },
            new RoomType { TypeName = "Double", Description = "Double bed" },
            new RoomType { TypeName = "Suite", Description = "Suite" }
        };
        context.RoomTypes.AddRange(roomTypes);

        var amenities = new List<Amenity>
        {
            new Amenity { Name = "WiFi" },
            new Amenity { Name = "Air Conditioning" },
            new Amenity { Name = "Breakfast" }
        };
        context.Amenities.AddRange(amenities);

        var hotels = new List<Hotel>
        {
            new Hotel { Name = "Central Hotel", Address = "123 Main St", City = "Metropolis", Country = "Freedonia" },
            new Hotel { Name = "Cozy Inn", Address = "45 Side St", City = "Smallville", Country = "Freedonia" }
        };
        context.Hotels.AddRange(hotels);

        // create rooms for first hotel
        var rooms = new List<Room>
        {
            new Room { Hotel = hotels[0], RoomType = roomTypes[0], RoomNumber = "101", PricePerNight = 50m, Capacity = 1, IsAvailable = true },
            new Room { Hotel = hotels[0], RoomType = roomTypes[1], RoomNumber = "102", PricePerNight = 80m, Capacity = 2, IsAvailable = true },
            new Room { Hotel = hotels[1], RoomType = roomTypes[2], RoomNumber = "201", PricePerNight = 150m, Capacity = 4, IsAvailable = true }
        };
        context.Rooms.AddRange(rooms);

        var users = new List<User>
        {
            new User { FullName = "Alice Example", Email = "alice@example.com", PhoneNumber = "1234567890", PasswordHash = "", Role = "Customer" },
            new User { FullName = "Bob Admin", Email = "admin@example.com", PhoneNumber = "0987654321", PasswordHash = "", Role = "Admin" }
        };
        context.Users.AddRange(users);

        await context.SaveChangesAsync();
    }
}
