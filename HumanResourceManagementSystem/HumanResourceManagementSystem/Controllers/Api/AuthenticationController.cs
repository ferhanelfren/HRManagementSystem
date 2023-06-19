using HumanResourceManagementSystem.Services;
using HumanResourceManagementSystem.ViewModels;
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

        //[HttpGet]
        //public async Task<ActionResult<List<EmployeeVM>>> GetUsers(string useruserNameFilter = null)
        //{
        //    var users = await _accountService.GetUsers(useruserNameFilter);
        //    if(users == null)
        //    {
        //        return BadRequest("Faild to retrieve users.");
        //    }

        //    return Ok(users);
        //}

        [HttpGet("GetUsers")]
        public async Task<ActionResult> GetUsers(string userNameFilter = null)
        {
            try
            {
                var employees = await _accountService.GetUsers(userNameFilter);
                if (employees == null)
                {
                    return BadRequest("Failed to retrieve users.");
                }
                return Ok(employees);
            }catch(Exception)
            {
                return StatusCode(500, "An error occurred while retrieving employees.");
            }
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
