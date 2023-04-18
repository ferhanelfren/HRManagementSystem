namespace HRManagementSystem_MVC_.Models
{
    public class EmployeeEducationalBackgroundEntity
    {
        public int Id { get; set; }
        public string SchoolName { get; set; }
        public int SchoolLocation { get; set; }
        public DateOnly Timestamp { get; set; }
    }
}
