namespace HRManagementSystem_MVC_.Models
{
    public class EmployeeWorkExperienceEntity
    {
        public int Id { get; set; }
        public string WorkExperienceName { get; set; }
        public string WorkExperiencePosition { get; set; }
        public string WorkExperienceStarted { get; set; }
        public string WorkExperienceCompleted { get; set; }
        public DateOnly Timestamp { get; set; }

    }
}
