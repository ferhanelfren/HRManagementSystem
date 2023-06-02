using HRManagementSystem_MVC_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HumanResourceManagementSystem.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        public DataController()
        {

        }

        [HttpGet]
        public LeaveBalance GetLeaveBalance()
        {
            return new LeaveBalance
            {
                Id = 1,
                Employee = new EmployeeEntity
                {
                    Id = 2,
                    FName = "Fname",
                    LName = "LName"
                }
            };
        }
    }
}

