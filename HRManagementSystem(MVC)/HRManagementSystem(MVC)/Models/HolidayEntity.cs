namespace HRManagementSystem_MVC_.Models
{
    public class HolidayEntity
    {
        public int Id { get; set; }
        public string HolidayName { get; set; }
        public DateOnly HolidayDate { get; set; }
        public string HolidayLocation { get; set; }
        public string HolidayShift { get; set; }
        public string HolidayDetails { get; set; }
        public DateOnly TimeStamp { get; set; }

    }
}
