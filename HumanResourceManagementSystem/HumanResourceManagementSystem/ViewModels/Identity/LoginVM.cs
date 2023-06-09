using System.ComponentModel.DataAnnotations;

namespace HumanResourceManagementSystem.ViewModels.Identity
{
    public class LoginVM
    {
        [Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
