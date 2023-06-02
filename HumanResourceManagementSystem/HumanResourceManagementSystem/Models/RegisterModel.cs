﻿using System.ComponentModel.DataAnnotations;

namespace SampleWEBAPI.Models
{
    public class RegisterModel
    {

        public Guid Id { get; set; }

        //public string LastName { get; set; }
        //public string FirstName { get; set; }
        //public string MiddleName { get; set; }
        //public string Gender { get; set; }
        //public DateTime BirthDate { get; set; }
        //[Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }

        [EmailAddress]
        //[Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        //[Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }


    }
}
