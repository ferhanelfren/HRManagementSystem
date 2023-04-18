namespace HRManagementSystem_MVC_.Models
{
    public class UserEntity
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string EmailAddress { get; set; }
        public string PhoneNumber { get; set; }
        public string Street { get; set; }
        public string CityorMunicipality { get; set; }
        public string Province { get; set; }
        public string Country { get; set; }
    }
}
