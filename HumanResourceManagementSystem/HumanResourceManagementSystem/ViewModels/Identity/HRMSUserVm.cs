using System.ComponentModel.DataAnnotations;

namespace HumanResourceManagementSystem.ViewModels.Identity
{
    public class HRMSUserVm
    {
        public string Username { get; set; }
        public string Password { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string ExtentName { get; set; }
        public string Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public string BuildingNo { get; set; }
        public string Street { get; set; }
        public string UnitNo { get; set; }
        public string Barangay { get; set; }
        public string CityMun { get; set; }
        public string Province { get; set; }
        public string ZipCode { get; set; }
    }
}
