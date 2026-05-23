namespace HotelBooking.DTOs.Report;

public class OccupancyReportDto
{
    public int RoomId { get; set; }
    public int OccupiedNights { get; set; }
    public int TotalNights { get; set; }
}
