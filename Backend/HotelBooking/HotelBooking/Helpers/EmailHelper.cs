namespace HotelBooking.Helpers;

public static class EmailHelper
{
    public static Task SendBookingConfirmationAsync(string to, string subject, string body)
    {
        // Placeholder for sending email - in production integrate with SMTP or email service
        return Task.CompletedTask;
    }

    public static Task SendCancellationAsync(string to, string subject, string body)
    {
        return Task.CompletedTask;
    }
}
