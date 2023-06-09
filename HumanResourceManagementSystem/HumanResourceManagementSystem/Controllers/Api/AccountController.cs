
using HumanResourceManagementSystem.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HumanResourceManagementSystem.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _configuration;
        private readonly AccountService _accountService;

        public AccountController(
            UserManager<IdentityUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IConfiguration configuration,
            AccountService accountService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
            _accountService = accountService;
        }


        //[Authorize]
        //[HttpPost("AddUser")]
        //public async Task<ActionResult<AddOrEditUserResponseVM>> AddUser([FromBody] UserVM uservm)
        //{
        //    if(ModelState.IsValid)
        //    {
        //        try
        //        {
        //            var userRole = ClaimsHelper.GetClaimValue(ClaimNames.RoleType, HttpContext.User.Claims);
        //            var isRestricted = true;
                    
        //            if(userRole == RoleNames.Administrator)
        //            {
        //                isRestricted = false;
        //            }

        //            var result = await _accountService.AddUser(uservm, isRestricted);
        //            return result;
        //        }
        //        catch (Exception ex) 
        //        {
        //            return BadRequest(new AddOrEditUserResponseVM { Errors = new string[] { ex.Message }, Succeeded = false });
        //        }
        //    } else
        //    {
        //        return BadRequest(new AddOrEditUserResponseVM { Errors = new string[] { "Invalid Model State" }, Succeeded = false });
        //    }
        //}

           }
}
