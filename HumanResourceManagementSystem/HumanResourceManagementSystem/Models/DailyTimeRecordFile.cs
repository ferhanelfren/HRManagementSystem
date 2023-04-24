using System.Reflection.Metadata;

namespace HRManagementSystem_MVC_.Models
{
    public class DailyTimeRecordFile
    {
        public int Id { get; set; }
        public Blob DtrFile { get; set; }
        public DateOnly Timestamp { get; set; }
    }
}
