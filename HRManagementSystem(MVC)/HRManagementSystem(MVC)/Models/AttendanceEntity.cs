namespace HRManagementSystem_MVC_.Models
{
    public class AttendanceEntity
    {
        public int Id { get; set; }
        public string LogType { get; set; }
        public DateOnly DateTimeLog { get; set; }
        public DateOnly DateUpdated { get; set; }
        public DateOnly TimeStamp { get; set; }
    }
}
