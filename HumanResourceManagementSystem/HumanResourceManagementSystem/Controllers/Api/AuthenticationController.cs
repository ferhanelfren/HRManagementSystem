using HumanResourceManagementSystem.Services;
using HumanResourceManagementSystem.ViewModels.Identity;
using Microsoft.AspNetCore.Mvc;


namespace HumanResourceManagementSystem.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly AccountService _accountService;
        

        public AuthenticationController(
            AccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet]
        [Route("getusers")]
        public async Task<IActionResult> GetUsers(string guidFilter = null)
        {
            var users = await _accountService.GetUsers(guidFilter);
            return Ok(users);
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginVM loginVM)
        {
            
            var response = await _accountService.Login(loginVM);
            if(response.Status == "Error")
            {
                return BadRequest(response.Message);
            }

            return Ok(response);
        }


        [HttpPost]
        [Route("createemployee")]
        public async Task<IActionResult> CreateEmployee([FromBody] HRMSUserVm userVm)
        {
            var response = await _accountService.CreateEmployee(userVm);
            if (response.Status == "Error")
            {
                return BadRequest(response.Message);
            }

            return Ok(response);

        }

        [HttpPost]
        [Route("InitializeAdmin")]
        public async Task<IActionResult> InitializeAdmin()
        {
            await _accountService.InitializeAdmin();
            return Ok("Admin Successfully Created");
        }

        [HttpPost]
        [Route("InitializeEmployee")]
        public async Task<IActionResult> InitializeEmployee()
        {
            await _accountService.InitializeEmployee();
            return Ok("Employee Successfully Created");
        }


    }

}
