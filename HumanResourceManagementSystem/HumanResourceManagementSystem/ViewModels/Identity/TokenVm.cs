namespace HumanResourceManagementSystem.ViewModels.Identity
{
    public class TokenVm
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
        public string Status { get; set; }
        public string Message { get; set; }
        public string Role { get; set; }
    }
}
