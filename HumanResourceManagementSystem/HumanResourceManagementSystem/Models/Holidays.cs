namespace HRManagementSystem_MVC_.Models
{
    public class Holidays
    {
        public int Id { get; set; }
        public string HolidayName { get; set; }
        public DateTime HolidayDate { get; set; }
        public string HolidayLocation { get; set; }
        public string HolidayShift { get; set; }
        public string HolidayDetails { get; set; }
        public DateTime TimeStamp { get; set; }

    }
}
