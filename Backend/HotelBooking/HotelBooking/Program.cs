using HotelBooking.Data;
using HotelBooking.Extensions;
using HotelBooking.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container using extension methods
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

builder.Services.AddDbContext<HotelBookingContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Global exception handling
app.UseMiddleware<ExceptionMiddleware>();

app.UseAuthentication();
app.UseMiddleware<JwtMiddleware>();
app.UseAuthorization();

app.MapControllers();

// Seed initial data
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<HotelBookingContext>();
    try
    {
        await DbInitializer.SeedAsync(db);
    }
    catch (Exception ex)
    {
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while seeding the database.");
    }
}

app.Run();
