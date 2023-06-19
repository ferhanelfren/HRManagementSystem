using HumanResourceManagementSystem.Models;
using System;
using System.ComponentModel.DataAnnotations;

namespace HumanResourceManagementSystem.ViewModels.Identity
{
    public class HRMSUserVm
    {
        public string Image { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string ExtentName { get; set; }
        public string PhoneNumber { get; set; }

        public string Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public string PlaceBirth { get; set; }
        public string BloodType { get; set; }
        public string Height { get; set; }
        public string Weight { get; set; }
        public string Citizenship { get; set; }
        public string CivilStatus { get; set; }
        public string Religion { get; set; }
        public string Ethnicity { get; set; }
        public string TribalAffiliation { get; set; }
        public string PresentAddress { get; set; }
        public string PresentCityMun { get; set; }
        public string PresentProvince { get; set; }
        public string PresentZip { get; set; }
        public string PermanentAddress { get; set; }
        public string PermanentCityMun { get; set; }
        public string PermanentProvince { get; set; }
        public string PermanentZip { get; set; }
        public DateTime DateHired { get; set; }
        public string NationalIDNo { get; set; }
        public string TINNo { get; set; }
        public string SSSNo { get; set; }
        public string PagibigNo { get; set; }
        public string PhilHealthNo { get; set; }

        public string SpouseFullName { get; set; }
        public string SpouseContactNo { get; set; }
        public string SpouseOccupation { get; set; }
        public string SpouseCompanyName { get; set; }
        public string SpouseCompanyAdd { get; set; }

        public string FatherName { get; set; }
        public string FatherOccupation { get; set; }
        public string MotherName { get; set; }
        public string MotherOccupation { get; set; }
        public string GovLicensureExam { get; set; }
        public DateTime DateExam { get; set; }
        public string Rating { get; set; }
        public string RegNo { get; set; }
        public string PlaceofExam { get; set; }
        public DateTime DateRegitered { get; set; }
        public DateTime Validity { get; set; }
        public string Remarks { get; set; }

        public string PrimarySchool { get; set; }
        public string PrimaryAcademicHonor { get; set; }
        public string PrimaryYearGraduated { get; set; }

        public string SecondarySchool { get; set; }
        public string SecondaryAcademicHonor { get; set; }
        public string SecondaryYearGraduated { get; set; }

        public string TertiarySchool { get; set; }
        public string TertiaryAcademicHonor { get; set; }
        public string DegreeEarned { get; set; }
        public string Major { get; set; }
        public string TertiaryYearGraduated { get; set; }

        public string MastersSchool { get; set; }
        public string MastersAcademicHonor { get; set; }
        public string MastersDegreeEarned { get; set; }
        public string MastersMajor { get; set; }
        public string MastersYearGraduated { get; set; }

        public string PhdSchool { get; set; }
        public string PhdAcademicHonor { get; set; }
        public string PhdDegreeEarned { get; set; }
        public string PhdMajor { get; set; }
        public string PhdYearGraduated { get; set; }

        public string PositionName { get; set; }
        public string EmployeeNumber { get; set; }
        public string DepartmentName { get; set; }

        //public DateTime TimeStamp { get; set; }
    }
}
