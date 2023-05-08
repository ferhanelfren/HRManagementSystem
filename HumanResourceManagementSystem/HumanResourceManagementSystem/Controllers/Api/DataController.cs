using HRManagementSystem_MVC_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
<<<<<<< HEAD

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
            return new LeaveBalance { Id = 1, Employee = new EmployeeEntity { 
                Id= 2,
                FName = "Fname",
                LName = "LName"
            } };
        }
    }
=======
using Microsoft.Extensions.Configuration;

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
		public EmployeeEntity GetEmployee()
		{
			return new EmployeeEntity
			{
				Id = 1,
				FName = "Fist Name",
				LName = "Last Name"
			};
		}


	}
>>>>>>> a3841c918aba13e2eddb99df31f6f1bc77af33b8
}
