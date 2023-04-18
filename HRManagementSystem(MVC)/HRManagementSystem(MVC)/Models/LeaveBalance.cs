namespace HRManagementSystem_MVC_.Models
{
    public class LeaveBalance
    {
        public int Id { get; set; }
        public EmployeeEntity Employee { get; set; }
        public int LeaveTotal { get; set; }
        public int LeaveUsed { get; set; }
        public int LeaveAccepted { get; set; }
        public int LeaveRejected { get; set; }
        public int LeaveExpired { get; set; }
        public DateOnly TimeStamp { get; set; }
    }
}
