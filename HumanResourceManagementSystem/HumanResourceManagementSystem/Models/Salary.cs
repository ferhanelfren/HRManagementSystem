﻿namespace HRManagementSystem_MVC_.Models
{
    public class Salary
    {
        public int Id { get; set; }
        public PositionEntity Position { get; set; }
        public string BasicSalary { get; set; }
    }
}
