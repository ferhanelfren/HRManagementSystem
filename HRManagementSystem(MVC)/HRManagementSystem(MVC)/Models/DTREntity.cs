namespace HRManagementSystem_MVC_.Models
{
    public class DTREntity
    {
        public int Id { get; set; }
        public DateTime DtrLogIn { get; set; }
        public DateTime DtrLogOut { get; set; }
        public DateOnly TimeStamp { get; set; }
    }
}
