namespace HRManagementSystem_MVC_.Models
{
    public class HolidayEntity
    {
        public int Id { get; set; }
        public string HolidayName { get; set; }
        public DateOnly HolidayDate { get; set; }
        public string Location { get; set; }
        public string Shift { get; set; }
        public string Details { get; set; }
        public DateOnly TimeStamp { get; set; }

    }
}
