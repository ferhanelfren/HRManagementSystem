namespace HRManagementSystem_MVC_.Models
{
    public class PayrollEntity
    {
        public int Id { get; set; }
        //this is to display the employee - ref no., position and department
        public EmployeeEntity Employee { get; set; }
        //where to extract the DTR to display and compute the present,absent and overtime pays nor decutions.
        public DailyTimeRecordFile DailyTimeRecordFile { get; set; }
        public int NetPay { get; set; }
        public EmployeeAllowanceEntity EmployeeAllowanceEntity { get; set; }
        public EmployeeDeduction EmployeeDeduction { get; set; }
        public Leave LeaveEntity { get; set; }
    }
}
