using AutoMapper;
using HotelBooking.Data;
using HotelBooking.Interfaces;
using HotelBooking.Mappings;
using HotelBooking.Repositories;
using HotelBooking.Services;
using Microsoft.EntityFrameworkCore;

namespace HotelBooking.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddAutoMapper(typeof(AutoMapperProfile));

        // Services
        services.AddScoped<IHotelService, HotelService>();
        services.AddScoped<IRoomService, RoomService>();
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<IBookingService, BookingService>();
        services.AddScoped<IPaymentService, PaymentService>();
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IReportService, ReportService>();
        services.AddScoped<ICancellationService, CancellationService>();

        // Generic repository
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

        // Specific repositories
        services.AddScoped<IHotelRepository, HotelRepository>();
        services.AddScoped<IRoomRepository, RoomRepository>();
        services.AddScoped<IBookingRepository, BookingRepository>();
        services.AddScoped<IPaymentRepository, PaymentRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IRoomTypeRepository, RoomTypeRepository>();
        services.AddScoped<IAmenityRepository, AmenityRepository>();
        services.AddScoped<ICancellationRepository, CancellationRepository>();

        services.AddControllers();
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddCors(options => options.AddDefaultPolicy(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

        return services;
    }
}
