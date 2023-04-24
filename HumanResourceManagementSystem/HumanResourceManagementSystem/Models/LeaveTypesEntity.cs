namespace HRManagementSystem_MVC_.Models
{
    public class LeaveTypesEntity
    {
        public int Id { get; set; }
        public string LeaveName { get; set; }
        public string LeaveType { get; set; }
        public string LeaveStatus { get; set; }
        public string LeaveNote { get; set; }
        public DateOnly TimeStamp { get; set; }
    }
}
