namespace HRManagementSystem_MVC_.Models
{
    public class EmployeeEntity
    {
        public int Id { get; set; }
        public string LName { get; set; }
        public string FName { get; set; }
        public string MName { get; set; }
        public int ExName { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string BirthDate { get; set; }
        public string EducBackGroundPriName { get; set; }
        public string MEducBackGroundPriAdd { get; set; }
        public string EducBackGroundSecName { get; set; }
        public string EducBackGroundSecAdd { get; set; }
        public string EducBackGroundTerName { get; set; }
        public string EducBackGroundTerAdd { get; set; }
        public string EducBackGroundMstrName { get; set; }
        public string EducBackGroundMstrAdd { get; set; }
        public string EducBackGroundPhdName { get; set; }
        public string EducBackGroundPhdAdd { get; set; }
        public string Designation_Position { get; set; }
        public string Department { get; set; }
        public string UploadImg { get; set; }
        public string UploadResume { get; set; }
        public DateOnly DateCreated { get; set; }
        public DateOnly TimeStamp { get; set; }
    }
}
