namespace HRManagementSystem_MVC_.Models
{
    public class LeaveRequestEntity
    {
        public int Id { get; set; }
        public string Status { get; set; }
        public DateOnly TimeStamp { get; set; }
    }
}
