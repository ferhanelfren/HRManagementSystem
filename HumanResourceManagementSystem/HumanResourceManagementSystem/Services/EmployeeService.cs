using HRManagementSystem_MVC_.Models;
using HumanResourceManagementSystem.Data;
using HumanResourceManagementSystem.Models;
using HumanResourceManagementSystem.Models.Identity;
using HumanResourceManagementSystem.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;


namespace HumanResourceManagementSystem.Services
{
    public class EmployeeService
    {
        private readonly DataContext _dataContext;

        public EmployeeService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<Response> AddPositions([FromBody] PositionsVM positionVM)
        {
            try
            {
                var position = new Positions
                {
                    PositionName = positionVM.PositionName,
                    PositionDescription = positionVM.PositionDescription,
                    TimeStamp = DateTime.Now
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


        //public async Task<Response> AddOrUpdateDepartments([FromBody] Departments departments)
        //{
        //    try
        //    {
        //        Departments department;

        //        if (departments.Id != 0)
        //        {
        //            // Update existing department
        //            department = await _dataContext.Departments.FindAsync(departments.Id);
        //            if (department == null)
        //            {
        //                var responseNotFound = new Response
        //                {
        //                    Status = "Failed",
        //                    Message = "Department not found for the given Id: " + departments.Id
        //                };
        //                return responseNotFound;
        //            }

        //            // Update department properties
        //            department.DepartmentName = departments.DepartmentName;
        //            department.TimeStamp = DateTime.Now;
        //        }
        //        else
        //        {
        //            // Add new department
        //            department = new Departments
        //            {
        //                DepartmentName = departments.DepartmentName,
        //                TimeStamp = DateTime.Now
        //            };

        //            _dataContext.Departments.Add(department);
        //        }

        //        await _dataContext.SaveChangesAsync();

        //        var response = new Response
        //        {
        //            Status = "Success",
        //            Message = department.Id != 0 ? "Department updated successfully." : "Department added successfully."
        //        };

        //        return response;
        //    }
        //    catch (Exception ex)
        //    {
        //        var errorResponse = new Response
        //        {
        //            Status = "Failed",
        //            Message = "Error adding/updating department: " + ex.Message
        //        };

        //        return errorResponse;
        //    }
        //}

        public async Task<Response> UpdateDepartment(int id, [FromBody] Departments departments)
        {
            try
            {
                var dept = await _dataContext.Departments.FindAsync(id);

                if (dept == null)
                {
                    var notFoundResponse = new Response
                    {
                        Status = "Failed",
                        Message = "Department not found."
                    };

                    return notFoundResponse;
                }

                dept.DepartmentName = departments.DepartmentName;
                dept.TimeStamp = DateTime.Now;

                await _dataContext.SaveChangesAsync();

                var successResponse = new Response
                {
                    Status = "Success",
                    Message = "Department updated successfully."
                };

                return successResponse;
            }
            catch (Exception ex)
            {
                var errorResponse = new Response
                {
                    Status = "Failed",
                    Message = "Error updating department: " + ex.Message
                };

                return errorResponse;
            }
        }

        public async Task<Response> UpdatePosition(int id, [FromBody] Positions positions)
        {
            try
            {
                var pos = await _dataContext.Positions.FindAsync(id);

                if (pos == null)
                {
                    var notFoundResponse = new Response
                    {
                        Status = "Failed",
                        Message = "Department not found."
                    };

                    return notFoundResponse;
                }

                pos.PositionName = positions.PositionName;
                pos.PositionDescription = positions.PositionDescription;
                pos.TimeStamp = DateTime.Now;

                await _dataContext.SaveChangesAsync();

                var successResponse = new Response
                {
                    Status = "Success",
                    Message = "Position updated successfully."
                };

                return successResponse;
            }
            catch (Exception ex)
            {
                var errorResponse = new Response
                {
                    Status = "Failed",
                    Message = "Error updating position: " + ex.Message
                };

                return errorResponse;
            }
        }
        
        public async Task<bool> CheckIfDepartmentNameExists(string departmentName)
        {
            
            return await _dataContext.Departments.AnyAsync(d => d.DepartmentName == departmentName);
        }


        public async Task<Response> AddDepartments([FromBody] DepartmentsVM departmentsVM)
        {
            try
            {
                var departments = new Departments
                {
                    DepartmentName = departmentsVM.DepartmentName,
                    TimeStamp = DateTime.Now
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

        public async Task<Response> DeleteDepartment(int departmentId)
        {
            try
            {
                var department = await _dataContext.Departments.FindAsync(departmentId);
                if (department == null)
                {
                    var notFoundResponse = new Response
                    {
                        Status = "Failed",
                        Message = "Department not found."
                    };

                    return notFoundResponse;
                }

                _dataContext.Departments.Remove(department);
                await _dataContext.SaveChangesAsync();

                var response = new Response
                {
                    Status = "Success",
                    Message = "Department deleted successfully."
                };

                return response;
            }
            catch (Exception ex)
            {
                var response = new Response
                {
                    Status = "Failed",
                    Message = "Error deleting department: " + ex.Message
                };

                return response;
            }
        }

        public async Task<Response> DeletePosition(int positionId)
        {
            try
            {
                var pos = await _dataContext.Positions.FindAsync(positionId);
                if (pos == null)
                {
                    var notFoundResponse = new Response
                    {
                        Status = "Failed",
                        Message = "Position not found."
                    };

                    return notFoundResponse;
                }

                _dataContext.Positions.Remove(pos);
                await _dataContext.SaveChangesAsync();

                var response = new Response
                {
                    Status = "Success",
                    Message = "Position deleted successfully."
                };

                return response;
            }
            catch (Exception ex)
            {
                var response = new Response
                {
                    Status = "Failed",
                    Message = "Error deleting Position: " + ex.Message
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

        //public async Task<Departments[]> GetDeptList()
        //{
        //    var query = _dataContext.Departments.AsQueryable();
        //    var departments = await query.ToArrayAsync();
        //    return departments;
        //}

        public async Task<Departments[]> GetDeptList(string departmentNameFilter = null)
        {
            var query = _dataContext.Departments.AsQueryable();
            if(!string.IsNullOrEmpty(departmentNameFilter))
            {
                query = query.Where(d => d.DepartmentName.Contains(departmentNameFilter));
            }
            var departments = await query.ToArrayAsync();
            return departments;
        }

        public async Task<List<Departments>> GetDepartmentList(string departmentNameFilter = null)
        {
            var query = _dataContext.Departments.AsQueryable();

            if (!string.IsNullOrEmpty(departmentNameFilter))
            {
                //query = query.Where(d => string.Equals(d.DepartmentName, departmentNameFilter, StringComparison.OrdinalIgnoreCase));
                // Apply the filter based on the department name
                query = query.Where(d => d.DepartmentName.Contains(departmentNameFilter));
               // query = query.Where(d => d.DepartmentName.ToLower().Contains(departmentNameFilter.ToLower()));
            }

            var departments = await query.ToListAsync();
            return departments;
        }

        public async Task<List<Positions>> GetPositionList(string positionNameFilter = null)
        {
            try
            {
                IQueryable<Positions> queryDept = _dataContext.Positions.AsQueryable();

                if (!string.IsNullOrEmpty(positionNameFilter))
                {
                    queryDept = queryDept.Where(positions => positions.PositionName == positionNameFilter);
                }

                return await queryDept.ToListAsync();
            }
            catch (Exception ex)
            {
                return new List<Positions>();
            }
        }






        //public async Task<string> UploadImage([FromBody]Image imageModel)
        //{
           
        //    byte[] imageData = Convert.FromBase64String(imageModel.Base64Data);
        //    string fileName = $"{Guid.NewGuid()}-{imageModel.Name}";
        //    string imagePath = Path.Combine("uploads", fileName);
        //    await File.WriteAllBytesAsync(imagePath, imageData);
        //    return imagePath;
        //}
    }
}
