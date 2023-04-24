namespace HRManagementSystem_MVC_.Models
{
    public class EmployeeAllowanceEntity
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public int Amount { get; set; }
        public DateOnly EffectiveDate { get; set; }
        public DateOnly DateCreated { get; set; }
        public DateOnly TimeStamp { get; set; }
    }
}
