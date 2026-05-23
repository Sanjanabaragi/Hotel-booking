using System.Text.RegularExpressions;
using HotelBooking.DTOs.Auth;

namespace HotelBooking.Validators;

public static class UserValidator
{
    public static (bool IsValid, string? Error) Validate(RegisterRequestDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.Email) || !Regex.IsMatch(dto.Email, @"^.+@.+\..+$")) return (false, "Invalid email");
        if (string.IsNullOrWhiteSpace(dto.Password) || dto.Password.Length < 6) return (false, "Password must be at least 6 characters");
        if (string.IsNullOrWhiteSpace(dto.PhoneNumber) || dto.PhoneNumber.Length < 7) return (false, "Invalid phone number");
        return (true, null);
    }
}
