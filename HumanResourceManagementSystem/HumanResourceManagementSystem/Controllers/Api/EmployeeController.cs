using HRManagementSystem_MVC_.Models;
using HumanResourceManagementSystem.Data;
using HumanResourceManagementSystem.Models;
using HumanResourceManagementSystem.Services;
using HumanResourceManagementSystem.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace HumanResourceManagementSystem.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeService _employeeService;
        private readonly LeaveService _leaveService;
        private readonly DataContext _dataContext;

        public EmployeeController(EmployeeService employeeService,
            LeaveService leaveService,
            DataContext dataContext)
        {
            _employeeService = employeeService;
            _leaveService = leaveService;
            _dataContext = dataContext;
        }


        //[HttpPost("AddOrUpdateDepartment")]
        //public async Task<IActionResult> AddOrUpdateDepartment([FromBody] Departments departments)
        //{
        //    var response = await _employeeService.AddOrUpdateDepartments(departments);
        //    return Ok(response);
        //}

        [HttpPut("UpdateDepartment/{id}")]
        public async Task<ActionResult<Response>> UpdateDepartment(int id, [FromBody] Departments departments)
        {
            var response = await _employeeService.UpdateDepartment(id, departments);
            return response;
        }

        [HttpPut("UpdatePosition/{id}")]
        public async Task<ActionResult<Response>> UpdatePosition(int id, [FromBody] Positions positions)
        {
            var response = await _employeeService.UpdatePosition(id, positions);
            return response;
        }
        
        [HttpDelete("Department/{departmentId}")]
        public async Task<IActionResult> DeleteDepartment(int departmentId)
        {
            var response = await _employeeService.DeleteDepartment(departmentId);
            if (response.Status == "Success")
            {
                return Ok(response);
            }
            else
            {
                return NotFound(response);
            }
        }

        [HttpDelete("Position/{positionId}")]
        public async Task<IActionResult> DeletePosition(int positionId)
        {
            var response = await _employeeService.DeletePosition(positionId);
            if (response.Status == "Success")
            {
                return Ok(response);
            }
            else
            {
                return NotFound(response);
            }
        }

        [HttpGet("CheckIfDepartmentNameExists")]
        public async Task<IActionResult> CheckIfDepartmentNameExists(string departmentName)
        {
            var exists = await _employeeService.CheckIfDepartmentNameExists(departmentName);
            if (exists != null)
            {
                return Ok("Department name exists.");
            }
            else
            {
                return NotFound("Department name does not exist.");
            }
        }


        //[HttpGet("{userName}")]
        //public async Task<IActionResult> GetEmployeeByUserName(string userName)
        //{
        //    var employee = await GetEmployeeByUserName(userName);
        //    if (employee == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(employee);
        //}

        [HttpPost("AddLeave")]
        public async Task<IActionResult> AddLeave([FromBody] LeaveVM leaveVM)
        {
            try
            {
                var response = await _leaveService.AddLeave(leaveVM);
                return Ok(response);
            }
            catch (Exception ex)
            {
                var errorResponse = new Response
                {
                    Status = "Failed",
                    Message = "Error adding Leave: " + ex.Message
                };

                return BadRequest(errorResponse);
            }
        }



        [HttpGet("GetDepartment")]
        public async Task<IActionResult> GetDepartment(string departmentNameFilter = null)
        {
            try
            {
                //var departments = await _employeeService.GetDeptList();
                //if (departments == null)
                //{
                //    return BadRequest("Failed to retrieve data.");
                //}
                //return Ok(departments);

                var departments = await _employeeService.GetDepartmentList();

                if (!string.IsNullOrEmpty(departmentNameFilter))
                {
                    departments = departments.Where(d => d.DepartmentName == departmentNameFilter).ToList();
                }

                return Ok(departments);


            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while retrieving departments.");
            }
        }

        //[HttpGet("GetDepartmentList")]
        //public async Task<IActionResult> GetDepartmentList(string departmentNameFilter = null)
        //{
        //    try
        //    {
        //        var departments = await _employeeService.GetDepartmentList();

        //        if(!string.IsNullOrEmpty(departmentNameFilter))
        //        {
        //            departments = departments.Where(d => d.DepartmentName == departmentNameFilter).ToList();
        //        }

        //        return Ok(departments);
        //    }
        //    catch (Exception ex)
        //    {
        //        // Log the exception or handle it accordingly
        //        return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while retrieving departments.");
        //    }
        //}

        [HttpGet("GetPositions")]
        public async Task<ActionResult> GetPositions(string positionNameFilter = null)
        {
            try
            {
                var positions = await _employeeService.GetPositionList(positionNameFilter);
                if (positions == null)
                {
                    return BadRequest("Failed to retrieve data.");
                }
                return Ok(positions);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while retrieving departments.");
            }
        }

        [HttpPost("AddPositions")]
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

        [HttpPost("AddDepartments")]
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

        [HttpPost("AddHolidays")]
        public async Task<IActionResult> AddHolidays(HolidaysVM holidaysVM)
        {
            var response = await _employeeService.AddHolidays(holidaysVM);

            if (response.Status == "Success")
            {
                return Ok(new { response.Message });
            }
            else
            {
                return BadRequest(new { response.Message });
            }
        }

        [HttpGet("GetHolidays")]
        public async Task<ActionResult> GetHolidays(string holidayNameFilter = null)
        {
            try
            {
                var positions = await _employeeService.GetHolidays(holidayNameFilter);
                if (positions == null)
                {
                    return BadRequest("Failed to retrieve data.");
                }
                return Ok(positions);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while retrieving holidays.");
            }
        }
        [HttpPut("UpdateHoliday/{id}")]
        public async Task<ActionResult<Response>> UpdateHoliday(int id, [FromBody] Holidays holidays)
        {
            var response = await _employeeService.UpdateHoliday(id, holidays);
            return response;
        }


    }
}
