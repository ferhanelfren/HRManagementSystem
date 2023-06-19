using HumanResourceManagementSystem.Data;
using HumanResourceManagementSystem.Models;
using HumanResourceManagementSystem.Models.Identity;
using HumanResourceManagementSystem.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace HumanResourceManagementSystem.Services
{
    public class EmployeeService
    {
        private readonly DataContext _dataContext;
        private readonly Response _response;

        public EmployeeService(DataContext dataContext)
        {
            _dataContext = dataContext;
            _response = new Response();
        }

        public async Task<Response> AddPositions([FromBody] PositionsVM positionVM)
        {
            try
            {
                var position = new Positions
                {
                    PositionName = positionVM.PositionName,
                    PositionDescription = positionVM.PositionDescription,
                };

                _dataContext.Positions.Add(position);
                await _dataContext.SaveChangesAsync();

                var response = new Response
                {
                    Status = "Success",
                    Message = "Position added successfully."
                };

                return response;
            }
            catch (Exception ex)
            {
                var response = new Response
                {
                    Status = "Failed",
                    Message = "Error adding position: " + ex.Message
                };

                return response;
            }

            
        }


        public async Task<Response> AddDepartments([FromBody] DepartmentsVM departmentsVM)
        {
            try
            {
                var departments = new Departments
                {
                    DepartmentName = departmentsVM.DepartmentName
                };

                _dataContext.Departments.Add(departments);
                await _dataContext.SaveChangesAsync();

                var response = new Response
                {
                    Status = "Success",
                    Message = "Department added successfully."
                };

                return response;
            }
            catch (Exception ex)
            {
                var response = new Response
                {
                    Status = "Failed",
                    Message = "Error adding department: " + ex.Message
                };

                return response;
            }


        }

        public async Task<Positions> GetPositionByName(string positionName)
        {
            return await _dataContext.Positions.FirstOrDefaultAsync(p => 
            p.PositionName == positionName);
        }

        public async Task<Departments> GetDepartmentByName(string departmentName)
        {
            return await _dataContext.Departments.FirstOrDefaultAsync(d => 
            d.DepartmentName == departmentName);
        }
    }
}
