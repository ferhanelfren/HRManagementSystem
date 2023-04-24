namespace HRManagementSystem_MVC_.Models
{
    public class EmployeeSkillEntity
    {
        public int Id { get; set; }
        public string SkillName { get; set; }
        public string SkillType { get; set;}
        public DateOnly Timestamp { get; set; }
    }
}
