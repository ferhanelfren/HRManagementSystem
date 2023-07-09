using HumanResourceManagementSystem.Models.Identity;

namespace HRManagementSystem_MVC_.Models
{
    public class Leave
    {
        public int Id { get; set; }
        public HRMSUser Employee { get; set; }
        public string LeaveTypes { get; set; }
        public DateOnly ApplyDate { get; set; }
        public DateOnly LeaveFrom { get; set; }
        public DateOnly LeaveTo { get; set; }
        public string NoofDays { get; set; }
        public string Reason { get; set; }
        public DateOnly TimeStamp { get; set; }

        
       
    }
}
