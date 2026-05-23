using HotelBooking.DTOs.Auth;

namespace HotelBooking.Interfaces;

public interface IAuthService
{
    Task<(bool Success, string Message, AuthResponseDto? Data)> RegisterAsync(RegisterRequestDto dto);
    Task<(bool Success, string Message, AuthResponseDto? Data)> LoginAsync(LoginRequestDto dto);
}
