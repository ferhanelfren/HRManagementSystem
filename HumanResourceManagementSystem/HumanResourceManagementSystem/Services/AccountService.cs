using AutoMapper;
using HumanResourceManagementSystem.Data;
using HumanResourceManagementSystem.Models;
using HumanResourceManagementSystem.Models.Identity;
using HumanResourceManagementSystem.ViewModels;
using HumanResourceManagementSystem.ViewModels.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SampleWEBAPI.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HumanResourceManagementSystem.Services
{
    public class AccountService
    {
        private readonly DataContext _dataContext;
        private readonly UserManager<HRMSUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        private readonly EmployeeService _employeeService;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly TokenVm _tokenVm;
        private readonly Response _response;

        public AccountService(
            DataContext dataContext,
            UserManager<HRMSUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IConfiguration configuration,
            IMapper mapper, 
            EmployeeService employeeService,
            IWebHostEnvironment webHostEnvironment)
        {
            _dataContext = dataContext;
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _mapper = mapper;
            _employeeService = employeeService;
            _webHostEnvironment = webHostEnvironment;
            _tokenVm = new TokenVm();
            _response = new Response();
        }


        public async Task<List<EmployeeVM>> GetEmployees(string userNameFilter = null)
        {
            try
            {
                
                IQueryable<HRMSUser> query = _dataContext.Users;

                if(!string.IsNullOrEmpty(userNameFilter))
                {
                    // query = query.Where( u => u.LastName == userNameFilter );
                    query = query.Where(u => (u.LastName + ", " + u.FirstName + " " + u.MiddleName).Contains(userNameFilter));
                }

                //var users = await query.ToArrayAsync();
                var users = await query.ToListAsync();
                var usersToReturn = _mapper.Map<List<EmployeeVM>>(users);
                return usersToReturn;

            }
            catch (Exception)
            {
                return null;
            }
        }

        //public async Task<Response> CreateEmployee([FromBody] HRMSUserVm userVm, IFormFile formFile)
        //{
        //    var userExists = await _userManager.FindByNameAsync(userVm.Username);
        //    if (userExists != null)
        //    {
        //        return new Response
        //        {
        //            Status = "Error",
        //            Message = "Username already exists!"
        //        };
        //    }

        //    var position = await _employeeService.GetPositionByName(userVm.PositionName);
        //    var department = await _employeeService.GetDepartmentByName(userVm.DepartmentName);

        //    if (position == null)
        //    {
        //        return new Response
        //        {
        //            Status = "Error",
        //            Message = "Position not found!"
        //        };
        //    }

        //    if(department == null)
        //    {
        //        return new Response
        //        {
        //            Status = "Error",
        //            Message = "Department not found!"
        //        };
        //    }

        //    var user = new HRMSUser
        //    {
        //        Image = await ConvertToBase64Async(formFile),
        //        UserName = userVm.Username,
        //        SecurityStamp = Guid.NewGuid().ToString(),


        //        Positions = position,
        //        Departments = department,
        //        EmployeeNumber = userVm.EmployeeNumber,
        //        TimeStamp = DateTime.Now
        //    };

        //    var result = await _userManager.CreateAsync(user, userVm.Password);

        //    if (result.Succeeded)
        //    {
        //        var userRoleExists = await _roleManager.RoleExistsAsync(UserRoles.User);
        //        if (!userRoleExists)
        //        {
        //            var userRole = new IdentityRole(UserRoles.User);
        //            await _roleManager.CreateAsync(userRole);
        //        }

        //        return new Response
        //        {
        //            Status = "Success",
        //            Message = "Employee account created successfully!"
        //        };
        //    }

        //    return new Response
        //    {
        //        Status = "Error",
        //        Message = "Employee account creation failed!"
        //    };
        //}

        public async Task<Response> CreateEmployee([FromBody] HRMSUserVm userVm)
        {
            var userExists = await _userManager.FindByNameAsync(userVm.Username);
            if (userExists != null)
            {
                return new Response
                {
                    Status = "Error",
                    Message = "Username already exists!"
                };
            }

            var position = await _employeeService.GetPositionByName(userVm.PositionName);
            var department = await _employeeService.GetDepartmentByName(userVm.DepartmentName);

            if (position == null)
            {
                return new Response
                {
                    Status = "Error",
                    Message = "Position not found!"
                };
            }

            if (department == null)
            {
                return new Response
                {
                    Status = "Error",
                    Message = "Department not found!"
                };
            }

            var user = new HRMSUser
            {
                UserName = userVm.Username,
                SecurityStamp = Guid.NewGuid().ToString(),

                FirstName = userVm.FirstName,
                MiddleName = userVm.MiddleName,
                LastName = userVm.LastName,
                ExtentName = userVm.ExtentName,
                Email = userVm.Email,
                PhoneNumber = userVm.PhoneNumber,
                Gender = userVm.Gender,
                BirthDate = userVm.BirthDate,
                PlaceBirth = userVm.PlaceBirth,
                BloodType = userVm.BloodType,
                Height = userVm.Height,
                Weight = userVm.Weight,
                Citizenship = userVm.Citizenship,
                CivilStatus = userVm.CivilStatus,
                Religion = userVm.Religion,
                Ethnicity = userVm.Ethnicity,
                TribalAffiliation = userVm.TribalAffiliation,
                PresentAddress = userVm.PresentAddress,
                PresentCityMun = userVm.PresentCityMun,
                PresentProvince = userVm.PresentProvince,
                PresentZip = userVm.PresentZip,
                PermanentAddress = userVm.PermanentAddress,
                PermanentCityMun = userVm.PermanentCityMun,
                PermanentProvince = userVm.PermanentProvince,
                PermanentZip = userVm.PermanentZip,
                DateHired = userVm.DateHired,
                NationalIDNo = userVm.NationalIDNo,
                TINNo = userVm.TINNo,
                SSSNo = userVm.SSSNo,
                PagibigNo = userVm.PagibigNo,
                PhilHealthNo = userVm.PhilHealthNo,

                SpouseFullName = userVm.SpouseFullName,
                SpouseContactNo = userVm.SpouseContactNo,
                SpouseOccupation = userVm.SpouseOccupation,
                SpouseCompanyName = userVm.SpouseCompanyName,
                SpouseCompanyAdd = userVm.SpouseCompanyAdd,

                FatherName = userVm.FatherName,
                FatherOccupation = userVm.FatherOccupation,
                MotherName = userVm.MotherName,
                MotherOccupation = userVm.MotherOccupation,

                GovLicensureExam = userVm.GovLicensureExam,
                DateExam = userVm.DateExam,
                Rating = userVm.Rating,
                RegNo = userVm.RegNo,
                PlaceofExam = userVm.PlaceofExam,
                DateRegitered = userVm.DateRegitered,
                Validity = userVm.Validity,
                Remarks = userVm.Remarks,

                PrimarySchool = userVm.PrimarySchool,
                PrimaryAcademicHonor = userVm.PrimaryAcademicHonor,
                PrimaryYearGraduated = userVm.PrimaryYearGraduated,
                SecondarySchool = userVm.SecondarySchool,
                SecondaryAcademicHonor = userVm.SecondaryAcademicHonor,
                SecondaryYearGraduated = userVm.SecondaryYearGraduated,
                TertiarySchool = userVm.TertiarySchool,
                TertiaryAcademicHonor = userVm.TertiaryAcademicHonor,
                DegreeEarned = userVm.DegreeEarned,
                Major = userVm.Major,
                TertiaryYearGraduated = userVm.TertiaryYearGraduated,
                MastersSchool = userVm.MastersSchool,
                MastersAcademicHonor = userVm.MastersAcademicHonor,
                MastersDegreeEarned = userVm.MastersDegreeEarned,
                MastersMajor = userVm.MastersMajor,
                MastersYearGraduated = userVm.MastersYearGraduated,
                PhdSchool = userVm.PhdSchool,
                PhdAcademicHonor = userVm.PhdAcademicHonor,
                PhdDegreeEarned = userVm.PhdDegreeEarned,
                PhdMajor = userVm.PhdMajor,
                PhdYearGraduated = userVm.PhdYearGraduated,

                Positions = position,
                Departments = department,
                EmployeeNumber = userVm.EmployeeNumber,
                TimeStamp = DateTime.Now
            };

            // Convert the image file to base64 string
            if (userVm.ImageFile != null)
            {
                using (var memoryStream = new MemoryStream())
                {
                    await userVm.ImageFile.CopyToAsync(memoryStream);
                    byte[] imageBytes = memoryStream.ToArray();
                    user.Image = Convert.ToBase64String(imageBytes);
                }
            }

            var result = await _userManager.CreateAsync(user, userVm.Password);

            if (result.Succeeded)
            {
                var userRoleExists = await _roleManager.RoleExistsAsync(UserRoles.User);
                if (!userRoleExists)
                {
                    var userRole = new IdentityRole(UserRoles.User);
                    await _roleManager.CreateAsync(userRole);
                }

                return new Response
                {
                    Status = "Success",
                    Message = "Employee account created successfully!"
                };
            }

            return new Response
            {
                Status = "Error",
                Message = "Employee account creation failed!"
            };
        }


        public async Task<Response> CreateEmployeeAccount(
            string image, string username, string password, string email,
            string lastName, string firstName, string middleName,
            string extentName, string phoneNumber, string gender, DateTime birthDate,
            string placeBirth, string bloodType, string height,
            string weight, string citizenship, string civilStatus,
            string religion, string ethnicity, string tribalAffiliation,
            string presentAddress, string presentCityMun, string presentProvince, string presentZip,
            string permanentAddress, string permanentCityMun, string permanentProvince, string permanentZip,
            DateTime dateHired, string nationalIDNo, string tinNo,
            string sssNo, string pagibigNo, string philHealthNo,
            string spouseFullName, string spouseContactNo, string spouseOccupation,
            string spouseCompanyName, string spouseCompanyAdd,
            string fatherName, string fatherOccupation,
            string motherName, string motherOccupation,
            string govLicensureExam, string dateExam, string rating,
            string regNo, string placeOfExam, string dateRegistered,
            string validity, string remarks,
            string primarySchool, string primaryAcademicHonor, string primaryYearGraduated,
            string secondarySchool, string secondaryAcademicHonor, string secondaryYearGraduated,
            string tertiarySchool, string tertiaryAcademicHonor, string degreeEarned,
            string major, string tertiaryYearGraduated,
            string mastersSchool, string mastersAcademicHonor, string mastersDegreeEarned,
            string mastersMajor, string mastersYearGraduated,
            string phdSchool, string phdAcademicHonor, string phdDegreeEarned,
            string phdMajor, string phdYearGraduated,
            string employeeNumber,
            Positions positions, Departments departments,
            DateTime timeStamp)
        {
            //var response = new Response();
            var userExists = await _userManager.FindByNameAsync(username);
            if (userExists != null)
            {
                _response.Status = "Error";
                _response.Message = "Username already Exists!!!";
                return _response;
            }


            HRMSUser user = new()
            {
                Image = image,
                UserName = username,
                SecurityStamp = Guid.NewGuid().ToString(),
                Email = email,
                FirstName = firstName,
                MiddleName = middleName,
                LastName = lastName,
                ExtentName = extentName,
                PhoneNumber = phoneNumber,
                Gender = gender,
                BirthDate = birthDate,
                PlaceBirth = placeBirth,
                BloodType = bloodType,
                Height = height,
                Weight = weight,
                Citizenship = citizenship,
                CivilStatus = civilStatus,
                Religion = religion,
                Ethnicity = ethnicity,
                TribalAffiliation = tribalAffiliation,
                PresentAddress = presentAddress,
                PresentCityMun = presentCityMun,
                PresentProvince = presentProvince,
                PresentZip = presentZip,
                PermanentAddress = permanentAddress,
                PermanentCityMun = permanentCityMun,
                PermanentProvince = permanentProvince,
                PermanentZip = permanentZip,
                DateHired = dateHired,
                NationalIDNo = nationalIDNo,
                TINNo = tinNo,
                SSSNo = sssNo,
                PagibigNo = pagibigNo,
                PhilHealthNo = philHealthNo,
                SpouseFullName = spouseFullName,
                SpouseContactNo = spouseContactNo,
                SpouseOccupation = spouseOccupation,
                SpouseCompanyName = spouseCompanyName,
                SpouseCompanyAdd = spouseCompanyAdd,
                FatherName = fatherName,
                FatherOccupation = fatherOccupation,
                MotherName = motherName,
                MotherOccupation = motherOccupation,
                GovLicensureExam = govLicensureExam,
                DateExam = dateExam,
                Rating = rating,
                RegNo = regNo,
                PlaceofExam = placeOfExam,
                DateRegitered = dateRegistered,
                Validity = validity,
                Remarks = remarks,
                PrimarySchool = primarySchool,
                PrimaryAcademicHonor = primaryAcademicHonor,
                PrimaryYearGraduated = primaryYearGraduated,
                SecondarySchool = secondarySchool,
                SecondaryAcademicHonor = secondaryAcademicHonor,
                SecondaryYearGraduated = secondaryYearGraduated,
                TertiarySchool = tertiarySchool,
                TertiaryAcademicHonor = tertiaryAcademicHonor,
                DegreeEarned = degreeEarned,
                Major = major,
                TertiaryYearGraduated = tertiaryYearGraduated,
                MastersSchool = mastersSchool,
                MastersAcademicHonor = mastersAcademicHonor,
                MastersDegreeEarned = mastersDegreeEarned,
                MastersMajor = mastersMajor,
                MastersYearGraduated = mastersYearGraduated,
                PhdSchool = phdSchool,
                PhdAcademicHonor = phdAcademicHonor,
                PhdDegreeEarned = phdDegreeEarned,
                PhdMajor = phdMajor,
                PhdYearGraduated = phdYearGraduated,

                EmployeeNumber = employeeNumber,
                Positions = positions,
                Departments = departments,
                TimeStamp = timeStamp
            };

            var result = await _userManager.CreateAsync(user, password);

            if (result.Succeeded)
            {
                var userRoleExists = await _roleManager.RoleExistsAsync(UserRoles.User);
                if (!userRoleExists)
                {
                    var userRole = new IdentityRole(UserRoles.User);
                    await _roleManager.CreateAsync(userRole);
                }

                await _userManager.AddToRoleAsync(user, UserRoles.User);

                _response.Status = "Success";
                _response.Message = "Employee Account created Successfully!!!";
            }
            else
            {
                _response.Status = "Error";
                _response.Message = "Employee Account creation failed!.";
            }

            return _response;

        }


        public async Task<Response> CreateAdminAccount(
            string image, string username, string password, string email,
            string lastName, string firstName, string middleName,
            string extentName, string phoneNumber, string gender, DateTime birthDate,
            string placeBirth, string bloodType, string height,
            string weight, string citizenship, string civilStatus,
            string religion, string ethnicity, string tribalAffiliation,
            string presentAddress, string presentCityMun, string presentProvince, string presentZip,
            string permanentAddress, string permanentCityMun, string permanentProvince, string permanentZip,
            DateTime dateHired, string nationalIDNo, string tinNo,
            string sssNo, string pagibigNo, string philHealthNo,
            string spouseFullName, string spouseContactNo, string spouseOccupation,
            string spouseCompanyName, string spouseCompanyAdd,
            string fatherName, string fatherOccupation,
            string motherName, string motherOccupation,
            string govLicensureExam, string dateExam, string rating,
            string regNo, string placeOfExam, string dateRegistered,
            string validity, string remarks,
            string primarySchool, string primaryAcademicHonor, string primaryYearGraduated,
            string secondarySchool, string secondaryAcademicHonor, string secondaryYearGraduated,
            string tertiarySchool, string tertiaryAcademicHonor, string degreeEarned,
            string major, string tertiaryYearGraduated,
            string mastersSchool, string mastersAcademicHonor, string mastersDegreeEarned,
            string mastersMajor, string mastersYearGraduated,
            string phdSchool, string phdAcademicHonor, string phdDegreeEarned,
            string phdMajor, string phdYearGraduated,
            string employeeNumber,
            Positions positions, Departments departments,
            DateTime timeStamp)
        {
            var userExists = await _userManager.FindByNameAsync(username);
            if (userExists != null)
            {
                _response.Status = "Error";
                _response.Message = "Username already Exists!!!";
                return _response;
            }

            HRMSUser user = new()
            {
                Image = image,
                UserName = username,
                SecurityStamp = Guid.NewGuid().ToString(),
                Email = email,
                FirstName = firstName,
                MiddleName = middleName,
                LastName = lastName,
                ExtentName = extentName,
                PhoneNumber = phoneNumber,
                Gender = gender,
                BirthDate = birthDate,
                PlaceBirth = placeBirth,
                BloodType = bloodType,
                Height = height,
                Weight = weight,
                Citizenship = citizenship,
                CivilStatus = civilStatus,
                Religion = religion,
                Ethnicity = ethnicity,
                TribalAffiliation = tribalAffiliation,
                PresentAddress = presentAddress,
                PresentCityMun = presentCityMun,
                PresentProvince = presentProvince,
                PresentZip = presentZip,
                PermanentAddress = permanentAddress,
                PermanentCityMun = permanentCityMun,
                PermanentProvince = permanentProvince,
                PermanentZip = permanentZip,
                DateHired = dateHired,
                NationalIDNo = nationalIDNo,
                TINNo = tinNo,
                SSSNo = sssNo,
                PagibigNo = pagibigNo,
                PhilHealthNo = philHealthNo,
                SpouseFullName = spouseFullName,
                SpouseContactNo = spouseContactNo,
                SpouseOccupation = spouseOccupation,
                SpouseCompanyName = spouseCompanyName,
                SpouseCompanyAdd = spouseCompanyAdd,
                FatherName = fatherName,
                FatherOccupation = fatherOccupation,
                MotherName = motherName,
                MotherOccupation = motherOccupation,

                GovLicensureExam = govLicensureExam,
                DateExam = dateExam,
                Rating = rating,
                RegNo = regNo,
                PlaceofExam = placeOfExam,
                DateRegitered = dateRegistered,
                Validity = validity,
                Remarks = remarks,
                PrimarySchool = primarySchool,
                PrimaryAcademicHonor = primaryAcademicHonor,
                PrimaryYearGraduated = primaryYearGraduated,
                SecondarySchool = secondarySchool,
                SecondaryAcademicHonor = secondaryAcademicHonor,
                SecondaryYearGraduated = secondaryYearGraduated,
                TertiarySchool = tertiarySchool,
                TertiaryAcademicHonor = tertiaryAcademicHonor,
                DegreeEarned = degreeEarned,
                Major = major,
                TertiaryYearGraduated = tertiaryYearGraduated,
                MastersSchool = mastersSchool,
                MastersAcademicHonor = mastersAcademicHonor,
                MastersDegreeEarned = mastersDegreeEarned,
                MastersMajor = mastersMajor,
                MastersYearGraduated = mastersYearGraduated,
                PhdSchool = phdSchool,
                PhdAcademicHonor = phdAcademicHonor,
                PhdDegreeEarned = phdDegreeEarned,
                PhdMajor = phdMajor,
                PhdYearGraduated = phdYearGraduated,

                EmployeeNumber = employeeNumber,
                Positions = positions,
                Departments = departments,
                TimeStamp = timeStamp
            };

            var result = await _userManager.CreateAsync(user, password);

            if (result.Succeeded)
            {
                var adminRoleExists = await _roleManager.RoleExistsAsync(UserRoles.Admin);
                if (!adminRoleExists)
                {
                    var admineRole = new IdentityRole(UserRoles.Admin);
                    await _roleManager.CreateAsync(admineRole);
                }

                await _userManager.AddToRoleAsync(user, UserRoles.Admin);

                _response.Status = "Success";
                _response.Message = "Admin Account created Successfully!!!";
            }
            else
            {
                _response.Status = "Error";
                _response.Message = "Admin creation failed!.";
                return _response;
            }
            return _response;
        }

        public async Task<TokenVm> Login([FromBody] LoginVM loginVM)
        {
            var user = await _userManager.FindByNameAsync(loginVM.Username);
            

            if(user != null && await _userManager.CheckPasswordAsync(user, loginVM.Password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                foreach(var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var token = GetToken(authClaims);
                var roles = userRoles.FirstOrDefault();

                //_response.Status = "Success";
                //_response.Message = "You have successfully logged in";
                //_response.Token = new JwtSecurityTokenHandler().WriteToken((SecurityToken)token);

                _tokenVm.Status = "Success";
                _tokenVm.Message = "You have successfully logged in";
                _tokenVm.Token = new JwtSecurityTokenHandler().WriteToken((SecurityToken)token);
                _tokenVm.Expiration = token.ValidTo;
                _tokenVm.Role = roles;

            }
            else
            {
                _tokenVm.Status = "Error";
                _tokenVm.Message = "Invalid!!!!";
                
            }

            return _tokenVm;

        }

        private JwtSecurityToken GetToken(List<Claim> authClaims)
        {
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(24),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

            return token;
        }

        public async Task InitializeAdmin()
        {
            //await CreateAdminAccount(
            //    "hrmsadmin",
            //    "asdqwe!123",
            //    "hrmsadmin@example.com",
            //    "FirstName",
            //    " ",
            //    " ",
            //    " ",
            //    " ",
            //    DateTime.Parse("2023-06-06T23:54:07.790Z"),
            //    " ",
            //    " ",
            //    " ",
            //    " ",
            //    " ",
            //    " ",
            //    " ");

            string username = "hrmsadmin";
            string password = "asdqwe!123";
            string email = "hrmsadmin@example.com";

            // Dummy values for the remaining parameters
            string image = " ";
            string lastName = " ";
            string firstName = " ";
            string middleName = " ";
            string extentName = " ";
            string phoneNumber = " ";
            string gender = " ";
            DateTime birthDate = DateTime.Now;
            string placeBirth = " ";
            string bloodType = " ";
            string height = " ";
            string weight = " ";
            string citizenship = " ";
            string civilStatus = " ";
            string religion = " ";
            string ethnicity = " ";
            string tribalAffiliation = " ";
            string presentAddress = " ";
            string presentCityMun = " ";
            string presentProvince = " ";
            string presentZip = " ";
            string permanentAddress = " ";
            string permanentCityMun = " ";
            string permanentProvine = " ";  
            string permanentZip = " ";
            DateTime dateHired = DateTime.Now;
            string nationalIDNo = " ";
            string tinNo = " ";
            string sssNo = " ";
            string pagibigNo = " ";
            string philHealthNo = " ";
            string spouseFullName = " ";
            string spouseContactNo = " ";
            string spouseOccupation = " ";
            string spouseCompanyName = " ";
            string spouseCompanyAdd = " ";
            string fatherName = " ";
            string fatherOccupation = " ";
            string motherName = " ";
            string motherOccupation = " ";
            string govLicensureExam = " ";
            string dateExam = " ";
            string rating = " ";
            string regNo = " ";
            string placeOfExam = " ";
            string dateRegistered = " ";
            string validity = " ";
            string remarks = "  ";
            string primarySchool = " ";
            string primaryAcademicHonor = " ";
            string primaryYearGraduated = " ";
            string secondarySchool = " ";
            string secondaryAcademicHonor = " ";
            string secondaryYearGraduated = " ";
            string tertiarySchool = " ";
            string tertiaryAcademicHonor = " ";
            string degreeEarned = " ";
            string major = " ";
            string tertiaryYearGraduated = " ";
            string mastersSchool = " ";
            string mastersAcademicHonor = " ";
            string mastersDegreeEarned = " ";
            string mastersMajor = " ";
            string mastersYearGraduated = " ";
            string phdSchool = " ";
            string phdAcademicHonor = " ";
            string phdDegreeEarned = " ";
            string phdMajor = " ";
            string phdYearGraduated = " ";
            string employeeNumber = " ";
            Positions positions = null;
            Departments departments = null;
            DateTime timeStamp = DateTime.Now;

            await CreateAdminAccount(
                image,
                username, 
                password, 
                email, 
                lastName, 
                firstName, 
                middleName, 
                extentName,
                phoneNumber,
                gender, 
                birthDate, 
                placeBirth,
                bloodType, 
                height, 
                weight, 
                citizenship, 
                civilStatus, 
                religion, 
                ethnicity, 
                tribalAffiliation, 
                presentAddress,
                presentCityMun,
                presentProvince,
                presentZip, 
                permanentAddress, 
                permanentCityMun,
                permanentProvine,
                permanentZip, 
                dateHired, 
                nationalIDNo, 
                tinNo,
                sssNo,
                pagibigNo, 
                philHealthNo, 
                spouseFullName, 
                spouseContactNo, 
                spouseOccupation, 
                spouseCompanyName, 
                spouseCompanyAdd,
                fatherName, 
                fatherOccupation, 
                motherName, 
                motherOccupation,
                govLicensureExam, 
                dateExam, 
                rating, 
                regNo, 
                placeOfExam,
                dateRegistered, 
                validity, 
                remarks, 
                primarySchool, 
                primaryAcademicHonor, 
                primaryYearGraduated, 
                secondarySchool,
                secondaryAcademicHonor, 
                secondaryYearGraduated,
                tertiarySchool, 
                tertiaryAcademicHonor, 
                degreeEarned, 
                major,
                tertiaryYearGraduated, 
                mastersSchool, 
                mastersAcademicHonor, 
                mastersDegreeEarned, 
                mastersMajor, 
                mastersYearGraduated,
                phdSchool, 
                phdAcademicHonor, 
                phdDegreeEarned, 
                phdMajor,
                employeeNumber,
                phdYearGraduated, 
                positions, 
                departments, 
                timeStamp);
        }

        public async Task InitializeEmployee()
        {
            //await CreateAdminAccount(
            //   "hrmsemployee",
            //   "asdqwe!123",
            //   "hrmsemployee@example.com",
            //   " ",
            //   " ",
            //   " ",
            //   " ",
            //   " ",
            //   DateTime.Parse("2023-06-06T23:54:07.790Z"),
            //   " ",
            //   " ",
            //   " ",
            //   " ",
            //   " ",
            //   " ",
            //   " ");

            string username = "hrmsemployee";
            string password = "asdqwe!123";
            string email = "hrmsemployee@example.com";

            // Dummy values for the remaining parameters
            string image = " ";
            string lastName = " ";
            string firstName = " ";
            string middleName = " ";
            string extentName = " ";
            string phoneNumber = " ";
            string gender = " ";
            DateTime birthDate = DateTime.Now;
            string placeBirth = " ";
            string bloodType = " ";
            string height = " ";
            string weight = " ";
            string citizenship = " ";
            string civilStatus = " ";
            string religion = " ";
            string ethnicity = " ";
            string tribalAffiliation = " ";
            string presentAddress = " ";
            string presentCityMun = " ";
            string presentProvince = " ";
            string presentZip = " ";
            string permanentAddress = " ";
            string permanentCityMun = " ";
            string permanentProvince = " ";
            string permanentZip = " ";
            DateTime dateHired = DateTime.Now;
            string nationalIDNo = " ";
            string tinNo = " ";
            string sssNo = " ";
            string pagibigNo = " ";
            string philHealthNo = " ";
            string spouseFullName = " ";
            string spouseContactNo = " ";
            string spouseOccupation = " ";
            string spouseCompanyName = " ";
            string spouseCompanyAdd = " ";
            string fatherName = " ";
            string fatherOccupation = " ";
            string motherName = " ";
            string motherOccupation = " ";
            string govLicensureExam = " ";
            string dateExam = " ";
            string rating = " ";
            string regNo = " ";
            string placeOfExam = " ";
            string dateRegistered = " ";
            string validity = " ";
            string remarks = "  ";
            string primarySchool = " ";
            string primaryAcademicHonor = " ";
            string primaryYearGraduated = " ";
            string secondarySchool = " ";
            string secondaryAcademicHonor = " ";
            string secondaryYearGraduated = " ";
            string tertiarySchool = " ";
            string tertiaryAcademicHonor = " ";
            string degreeEarned = " ";
            string major = " ";
            string tertiaryYearGraduated = " ";
            string mastersSchool = " ";
            string mastersAcademicHonor = " ";
            string mastersDegreeEarned = " ";
            string mastersMajor = " ";
            string mastersYearGraduated = " ";
            string phdSchool = " ";
            string phdAcademicHonor = " ";
            string phdDegreeEarned = " ";
            string phdMajor = " ";
            string phdYearGraduated = " ";
            string employeeNumber = " ";
            Positions positions = null;
            Departments departments = null;
            DateTime timeStamp = DateTime.Now;

            await CreateEmployeeAccount(
                image,
                username,
                password,
                email,
                lastName,
                firstName,
                middleName,
                extentName,
                phoneNumber,
                gender,
                birthDate,
                placeBirth,
                bloodType,
                height,
                weight,
                citizenship,
                civilStatus,
                religion,
                ethnicity,
                tribalAffiliation,
                presentAddress,
                presentCityMun,
                presentProvince,
                presentZip,
                permanentAddress,
                permanentCityMun,
                permanentProvince,
                permanentZip,
                dateHired,
                nationalIDNo,
                tinNo,
                sssNo,
                pagibigNo,
                philHealthNo,
                spouseFullName,
                spouseContactNo,
                spouseOccupation,
                spouseCompanyName,
                spouseCompanyAdd,
                fatherName,
                fatherOccupation,
                motherName,
                motherOccupation,
                govLicensureExam,
                dateExam,
                rating,
                regNo,
                placeOfExam,
                dateRegistered,
                validity,
                remarks,
                primarySchool,
                primaryAcademicHonor,
                primaryYearGraduated,
                secondarySchool,
                secondaryAcademicHonor,
                secondaryYearGraduated,
                tertiarySchool,
                tertiaryAcademicHonor,
                degreeEarned,
                major,
                tertiaryYearGraduated,
                mastersSchool,
                mastersAcademicHonor,
                mastersDegreeEarned,
                mastersMajor,
                mastersYearGraduated,
                phdSchool,
                phdAcademicHonor,
                phdDegreeEarned,
                phdMajor,
                phdYearGraduated,
                employeeNumber,
                positions,
                departments,
                timeStamp);
        }
    }
}
