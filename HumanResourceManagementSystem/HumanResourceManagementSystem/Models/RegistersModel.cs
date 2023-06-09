using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace HumanResourceManagementSystem.Models
{
    public class RegistersModel : IdentityUser
    {

        //[Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }

        [EmailAddress]
        //[Required(ErrorMessage = "Email is required")]
        public new string Email { get; set; }

        //[Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }


        ////[Required(ErrorMessage = "User Name is required")]
        //public string Username { get; set; }

        //[EmailAddress]
        ////[Required(ErrorMessage = "Email is required")]
        //public string Email { get; set; }

        ////[Required(ErrorMessage = "Password is required")]
        //public string Password { get; set; }

    }
}
