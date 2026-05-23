using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace HotelBooking.Helpers;

public static class JwtHelper
{
    public static string GenerateToken(int userId, string role, IConfiguration config, int expireMinutes = 60)
    {
        var key = Encoding.UTF8.GetBytes(config["Jwt:Key"] ?? string.Empty);
        var claims = new[] { new Claim("id", userId.ToString()), new Claim(ClaimTypes.Role, role) };
        var creds = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(claims: claims, expires: DateTime.UtcNow.AddMinutes(expireMinutes), signingCredentials: creds);
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
