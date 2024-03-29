﻿namespace HRManagementSystem_MVC_.Models
{
    public class LeaveEntity
    {
        public int Id { get; set; }
        public EmployeeEntity Employee { get; set; }
        public LeaveTypesEntity LeaveTypes { get; set; }
        public DateOnly ApplyDate { get; set; }
        public DateOnly LeaveFrom { get; set; }
        public DateOnly LeaveTo { get; set; }
        public int NoofDays { get; set; }
        public string Reason { get; set; }
        public DateOnly TimeStamp { get; set; }
    }
}
