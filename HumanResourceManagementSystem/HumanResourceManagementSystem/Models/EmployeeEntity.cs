namespace HRManagementSystem_MVC_.Models
{
    public class EmployeeEntity
    {
        //ID should also be the Ref. No. of an employee
        public int Id { get; set; }
        public string LName { get; set; }
        public string FName { get; set; }
        public string MidName { get; set; }
        public string ExtenName { get; set; }
        public string Gender { get; set; }
        public string BirthDate { get; set; }
        public string BuildingNo { get; set; }
        public string Street { get; set; }
        public string UnitNo { get; set; }
        public string Building { get; set; }
        public string Province { get; set; }
        public string CityMun { get; set; }
        public string Barangay { get; set; }
        public string ZipCode { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        //Education Background
        public ICollection<EmployeeEducationalBackgroundEntity> EmployeeEducationalBackgrounds { get; set; }                                                                                                                                                                  
        //skills
        public ICollection<EmployeeSkillEntity> EmployeeSkills { get; set; }
        //workexperience
        public ICollection<EmployeeWorkExperienceEntity> EmployeeWorkExperiences { get; set; }
       
        public DepartmentEntity DepartmentEntity { get; set; }
        //this status is PartTime / FullTime
        public string EmployeeStatus { get; set; }
        public string UploadImg { get; set; }
        public string UploadResume { get; set; }
        public DateOnly DateCreated { get; set; }
        public DateOnly TimeStamp { get; set; }
    }
}
