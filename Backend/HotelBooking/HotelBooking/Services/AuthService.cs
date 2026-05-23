using AutoMapper;
using HotelBooking.Data;
using HotelBooking.DTOs.Auth;
using HotelBooking.Helpers;
using HotelBooking.Interfaces;
using HotelBooking.Models;
using HotelBooking.Validators;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace HotelBooking.Services;

public class AuthService : IAuthService
{
    private readonly HotelBookingContext _db;
    private readonly IMapper _mapper;
    private readonly IConfiguration _config;

    public AuthService(HotelBookingContext db, IMapper mapper, IConfiguration config)
    {
        _db = db;
        _mapper = mapper;
        _config = config;
    }

    public async Task<(bool Success, string Message, AuthResponseDto? Data)> RegisterAsync(RegisterRequestDto dto)
    {
        var valid = UserValidator.Validate(dto);
        if (!valid.IsValid) return (false, valid.Error ?? "Invalid", null);

        if (await _db.Users.AnyAsync(u => u.Email == dto.Email)) return (false, "Email already registered", null);

        var user = _mapper.Map<User>(dto);
        user.PasswordHash = HashPassword(dto.Password);
        user.Role = "User";
        _db.Users.Add(user);
        await _db.SaveChangesAsync();

        var token = JwtHelper.GenerateToken(user.UserId, user.Role, _config);
        var response = new AuthResponseDto { UserId = user.UserId, Email = user.Email, FullName = user.FullName, Role = user.Role, Token = token };
        return (true, string.Empty, response);
    }

    public async Task<(bool Success, string Message, AuthResponseDto? Data)> LoginAsync(LoginRequestDto dto)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
        if (user == null) return (false, "Invalid credentials", null);
        if (!VerifyPassword(dto.Password, user.PasswordHash)) return (false, "Invalid credentials", null);
        var token = JwtHelper.GenerateToken(user.UserId, user.Role, _config);
        var response = new AuthResponseDto { UserId = user.UserId, Email = user.Email, FullName = user.FullName, Role = user.Role, Token = token };
        return (true, string.Empty, response);
    }

    private static string HashPassword(string password)
    {
        using var sha = SHA256.Create();
        var bytes = System.Text.Encoding.UTF8.GetBytes(password);
        return Convert.ToBase64String(sha.ComputeHash(bytes));
    }

    private static bool VerifyPassword(string password, string hash) => HashPassword(password) == hash;
}
