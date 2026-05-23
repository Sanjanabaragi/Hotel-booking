namespace HotelBooking.Helpers;

public static class FileUploadHelper
{
    public static bool ValidateImage(byte[] content, string contentType)
    {
        // Basic validation
        return content.Length > 0 && (contentType == "image/jpeg" || contentType == "image/png");
    }

    public static Task<string> UploadAsync(byte[] content, string fileName)
    {
        // Placeholder - in production save to blob storage or file system
        return Task.FromResult($"/uploads/{fileName}");
    }
}
