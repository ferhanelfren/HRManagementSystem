using AutoMapper;
using HumanResourceManagementSystem.Data;
using HumanResourceManagementSystem.Models.Identity;
using HumanResourceManagementSystem.ViewModels;
using HumanResourceManagementSystem.ViewModels.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
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
        private readonly TokenVm _tokenVm;
        private readonly Response _response;
        public AccountService(
            DataContext dataContext,
            UserManager<HRMSUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IConfiguration configuration,
            IMapper mapper)
        {
            _dataContext = dataContext;
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _mapper = mapper;
            _tokenVm = new TokenVm();
            _response = new Response();
        }


        public async Task<List<EmployeeVM>> GetUsers(string guidFilter = null)
        {
            try
            {
                IQueryable<HRMSUser> query = _dataContext.Users;

                if (!string.IsNullOrEmpty(guidFilter))
                {
                    query = query.Where(u => u.UserName == guidFilter);
                }

                //query = query.Where(u => u.isAdmin);

                var users = await query.ToArrayAsync();

                var usersToReturn = new List<EmployeeVM>();
                foreach (var user in users) {
                    var employeeVM = new EmployeeVM { 
                        Id = user.Id,
                        //Image
                        FullName = user.FirstName + " " + user.LastName,
                        

                    };
                    usersToReturn.Add(employeeVM);
                }
                //var usersToReturn = _mapper.Map<EmployeeVM[]>(users);
                return users;
            } catch(Exception ex)
            {
                return null;
            }
        }

        public async Task<Response> CreateEmployee([FromBody] HRMSUserVm userVm)
        {
            //var response = new Response();
            var userExists = await _userManager.FindByNameAsync(userVm.Username);
            if (userExists != null)
            {
                _response.Status = "Error";
                _response.Message = "Username already Exists!!!";
                return _response;
            }


            HRMSUser user = new()
            {
                UserName = userVm.Username,
                SecurityStamp = Guid.NewGuid().ToString(),
                Email = userVm.Email,
                FirstName = userVm.FirstName,
                MiddleName = userVm.MiddleName,
                LastName = userVm.LastName,
                ExtentName = userVm.ExtentName,
                Gender = userVm.Gender,
                BirthDate = userVm.BirthDate,
                BuildingNo = userVm.BuildingNo,
                Street = userVm.Street,
                UnitNo = userVm.UnitNo,
                Barangay = userVm.Barangay,
                CityMun = userVm.CityMun,
                Province = userVm.Province,
                ZipCode = userVm.ZipCode
            };

            var result = await _userManager.CreateAsync(user, userVm.Password);

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

        public async Task<Response> CreateEmployeeAccount(
            string username, string password, string email,
            string lastName, string firstName, string middleName,
            string extentName, string gender, DateTime birthDate,
            string buildingNo, string street, string unitNo,
            string barangay, string cityMun, string province, string zipCode)
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
                UserName = username,
                SecurityStamp = Guid.NewGuid().ToString(),
                Email = email,
                FirstName = firstName,
                MiddleName = middleName,
                LastName = lastName,
                ExtentName = extentName,
                Gender = gender,
                BirthDate = birthDate,
                BuildingNo = buildingNo,
                Street = street,
                UnitNo = unitNo,
                Barangay = barangay,
                CityMun = cityMun,
                Province = province,
                ZipCode = zipCode
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
            string username, string password,string email,
            string lastName, string firstName, string middleName,
            string extentName, string gender, DateTime birthDate,
            string buildingNo, string street, string unitNo,
            string barangay, string cityMun,string province, string zipCode )
        {
            var userExists = await _userManager.FindByNameAsync(username);
            if(userExists != null)
            {
                _response.Status = "Error";
                _response.Message = "Username already Exists!!!";
                return _response;
            }

            HRMSUser user = new()
            {
                UserName = username,
                SecurityStamp = Guid.NewGuid().ToString(),
                Email = email,
                FirstName = firstName,
                MiddleName = middleName,
                LastName = lastName,
                ExtentName = extentName,
                Gender = gender,
                BirthDate = birthDate,
                BuildingNo = buildingNo,
                Street = street,
                UnitNo = unitNo,
                Barangay = barangay,
                CityMun = cityMun,
                Province = province,
                ZipCode = zipCode
            };

            var result = await _userManager.CreateAsync(user, password);

            if (result.Succeeded)
            {
                var adminRoleExists = await _roleManager.RoleExistsAsync(UserRoles.Admin);
                if(!adminRoleExists)
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

            //if (!await _roleManager.RoleExistsAsync(UserRoles.Admin))
            //    await _roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            //if (!await _roleManager.RoleExistsAsync(UserRoles.User))
            //    await _roleManager.CreateAsync(new IdentityRole(UserRoles.User));

            //if (await _roleManager.RoleExistsAsync(UserRoles.Admin))
            //{
            //    await _userManager.AddToRoleAsync(user, UserRoles.Admin);
            //}

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
            await CreateAdminAccount(
                "hrmsadmin",
                "asdqwe!123",
                "hrmsadmin@example.com", 
                " ",
                " ",
                " ",
                " ",
                " ",
                DateTime.Parse("2023-06-06T23:54:07.790Z"),
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ");
        }

        public async Task InitializeEmployee()
        {
            await CreateAdminAccount(
               "hrmsemployee",
               "asdqwe!123",
               "hrmsemployee@example.com",
               " ",
               " ",
               " ",
               " ",
               " ",
               DateTime.Parse("2023-06-06T23:54:07.790Z"),
               " ",
               " ",
               " ",
               " ",
               " ",
               " ",
               " ");
        }
    }
}
