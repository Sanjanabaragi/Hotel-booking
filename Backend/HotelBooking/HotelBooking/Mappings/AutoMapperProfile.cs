using AutoMapper;
using HotelBooking.DTOs.Auth;
using HotelBooking.DTOs.Booking;
using HotelBooking.DTOs.Hotel;
using HotelBooking.DTOs.Payment;
using HotelBooking.DTOs.Report;
using HotelBooking.DTOs.Cancellation;
using HotelBooking.DTOs.Room;
using HotelBooking.DTOs.User;
using HotelBooking.Models;

namespace HotelBooking.Mappings;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<User, UserResponseDto>().ReverseMap();
        CreateMap<RegisterRequestDto, User>().ForMember(d => d.PasswordHash, opt => opt.Ignore());

        CreateMap<Hotel, HotelResponseDto>().ReverseMap();
        CreateMap<CreateHotelDto, Hotel>();
        CreateMap<UpdateHotelDto, Hotel>();

        CreateMap<Room, RoomResponseDto>().ReverseMap();
        CreateMap<CreateRoomDto, Room>();
        CreateMap<UpdateRoomDto, Room>();

        CreateMap<Booking, BookingResponseDto>().ReverseMap();
        CreateMap<CreateBookingDto, Booking>();

        CreateMap<Payment, PaymentResponseDto>().ReverseMap();

        CreateMap<Booking, BookingReportDto>().ReverseMap();
    }
}
