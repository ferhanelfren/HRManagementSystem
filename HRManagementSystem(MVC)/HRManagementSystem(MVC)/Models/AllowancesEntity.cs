namespace HRManagementSystem_MVC_.Models
{
    public class AllowancesEntity
    {
        public int Id { get; set; }
        public string AllowanceName { get; set; }
        public int AllowanceAmount { get; set; }
        public string AllowanceDescription { get; set; }
        public DateOnly TimeStamp { get; set; }
    }
}
