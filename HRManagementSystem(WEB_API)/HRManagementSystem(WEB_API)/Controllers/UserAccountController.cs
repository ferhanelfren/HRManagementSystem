using HRManagementSystem_WEB_API_.Data;
using HRManagementSystem_WEB_API_.DTOs;
using HRManagementSystem_WEB_API_.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using System.Security.Cryptography;
using System.Text;

namespace HRManagementSystem_WEB_API_.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserAccountController : ControllerBase
    {
        private readonly DataContext _datacontext;

        public UserAccountController(DataContext datacontext) 
        { 
            _datacontext = datacontext;
        }


        [HttpGet("GetUsers")]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            var users = await _datacontext.Users.ToListAsync();

            return users;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id) 
        {
            return await _datacontext.Users.FindAsync(id);
        }

        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto)
        {

            if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");

            using var hmac = new HMACSHA512();

            var user = new AppUser
            {
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PaswordSalt = hmac.Key
            };

            _datacontext.Users.Add(user);
            await _datacontext.SaveChangesAsync();

            return Ok(user);
        }


        [HttpPost("login")]
        public async Task<ActionResult<AppUser>> Login(LogInDto logInDto)
        {
            var user = await _datacontext.Users.SingleOrDefaultAsync(
                x => x.UserName == logInDto.Username);

            if (user == null) return Unauthorized("Invalid Username");

            using var hmac = new HMACSHA512(user.PaswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(logInDto.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid Password");
            }

            return user;
        }




        private async Task<bool> UserExists(string username)
        {
            return await _datacontext.Users.AnyAsync(x => x.UserName == username.ToLower());
        }
        
    }
}
