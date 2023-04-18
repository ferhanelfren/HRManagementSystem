namespace HRManagementSystem_MVC_.Models
{
    public class EmployeeDeduction
    {
        public int Id { get; set; }
        public string DeductionName { get; set; }
        public int DeductionAmount { get; set; }
        public string DedcutionDescription { get; set; }
        public string DeductionEffectiveDate { get; set; }
    }
}
