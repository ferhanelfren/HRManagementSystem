using HumanResourceManagementSystem.Data;
using HumanResourceManagementSystem.Models.Identity;
using HumanResourceManagementSystem.Services;
using HumanResourceManagementSystem.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HumanResourceManagementSystem.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeService _employeeService;
        private readonly DataContext _dataContext;

        public EmployeeController(EmployeeService employeeService,
            DataContext dataContext)
        {
            _employeeService = employeeService;
            _dataContext = dataContext;
        }

        [HttpPost]
        [Route("AddPositions")]
        public async Task<IActionResult> AddPositions(PositionsVM positionVM)
        {
            var response = await _employeeService.AddPositions(positionVM);

            if (response.Status == "Success")
            {
                return Ok(new { response.Message});
            }
            else
            {
                return BadRequest(new { response.Message });
            }
        }

        [HttpPost]
        [Route("AddDepartments")]
        public async Task<IActionResult> AddDepartments(DepartmentsVM departmentsVM)
        {
            var response = await _employeeService.AddDepartments(departmentsVM);

            if (response.Status == "Success")
            {
                return Ok(new { response.Message });
            }
            else
            {
                return BadRequest(new { response.Message });
            }
        }

    }
}
