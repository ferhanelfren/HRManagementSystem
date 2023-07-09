using HRManagementSystem_MVC_.Models;

namespace HumanResourceManagementSystem.ViewModels
{
    public class LeaveVM
    {
        public string LastName { get; set; }
        public string LeaveTypes { get; set; }
        public DateOnly ApplyDate { get; set; }
        public DateOnly LeaveFrom { get; set; }
        public DateOnly LeaveTo { get; set; }
        public string NoofDays { get; set; }
        public string Reason { get; set; }

        
    }
}
