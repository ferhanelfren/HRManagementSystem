using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace HRManagementSystem_WEB_API_.DTOs
{
    public class RegisterDto 
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }
}
