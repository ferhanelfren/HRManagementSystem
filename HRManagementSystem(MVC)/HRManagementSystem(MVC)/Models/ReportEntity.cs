namespace HRManagementSystem_MVC_.Models
{
    public class ReportEntity
    {
        public int Id { get; set; }
        public EmployeeEntity Employee { get; set; }
        public DepartmentEntity Department { get; set; }
        public string ReportTitle { get; set; }
        public string ReportDescription { get; set; }
        public string ReportPriority { get; set; }
        public string Client { get; set; }
        public int Price { get; set; }
        public DateOnly ReportStarted { get; set; }
        public DateOnly ReportEnded { get; set;}
        public string Status { get; set; }
        public string StatusDescription { get; set; }
        public string ReportUploadFile { get; set; }
        public DateOnly TimeStamp { get; set; }
    }

}
