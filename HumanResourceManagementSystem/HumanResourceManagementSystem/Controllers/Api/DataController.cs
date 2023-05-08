using HRManagementSystem_MVC_.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
}
