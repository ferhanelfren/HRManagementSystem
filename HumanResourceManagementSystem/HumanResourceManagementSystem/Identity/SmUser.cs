using Microsoft.AspNetCore.Identity;

namespace HumanResourceManagementSystem.Identity
{
    public class SmUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public DateTime LastLoggedIn { get; set; }
        public bool EmailNotification { get; set; }
        public bool SmsNotification { get; set; }
    }
}
