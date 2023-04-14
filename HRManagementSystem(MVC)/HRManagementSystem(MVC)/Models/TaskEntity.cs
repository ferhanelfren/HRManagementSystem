namespace HRManagementSystem_MVC_.Models
{
    public class TaskEntity
    {
        public int Id { get; set; }
        public int TaskNo { get; set; }
        public string TaskName { get; set; }
        public string Status { get; set; }
        public string Priority { get; set; }
        public string TaskType { get; set; }
        public DateOnly TaskDate { get; set; }
        public string TaskDescription { get; set; }
        public DateOnly Timestamp { get; set; }

    }
}
