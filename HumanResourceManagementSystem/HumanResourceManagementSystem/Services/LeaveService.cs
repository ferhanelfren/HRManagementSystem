using HRManagementSystem_MVC_.Models;
using HumanResourceManagementSystem.Data;
using HumanResourceManagementSystem.Models;
using HumanResourceManagementSystem.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace HumanResourceManagementSystem.Services
{
    public class LeaveService
    {
        private readonly DataContext _dataContext;
        private readonly AccountService _accountService;

        public LeaveService(DataContext dataContext, AccountService accountService)
        {
            _dataContext = dataContext;
            _accountService = accountService;
        }


        public async Task<Response> AddLeave([FromBody] LeaveVM leaveVM)
        {
            try
            {
             
                var employee = await _accountService.GetEmployeeByUserName(leaveVM.LastName);
                if (employee == null)
                {
                    return new Response
                    {
                        Status = "Error",
                        Message = "Your Name does not exists!!"
                    };
                }

                var leaveM = new Leave
                {

                    Employee = employee,
                    LeaveTypes = leaveVM.LeaveTypes,
                    ApplyDate= leaveVM.ApplyDate,
                    LeaveFrom= leaveVM.LeaveFrom,
                    LeaveTo= leaveVM.LeaveTo,
                    NoofDays= leaveVM.NoofDays,
                    Reason= leaveVM.Reason,

                };

                _dataContext.Leaves.Add(leaveM);
                await _dataContext.SaveChangesAsync();

                var response = new Response
                {
                    Status = "Success",
                    Message = "Leave added successfully."
                };

                return response;
            }
            catch (Exception ex)
            {
                var response = new Response
                {
                    Status = "Failed",
                    Message = "Error adding Leave: " + ex.Message
                };

                return response;
            }


        }



    }
}
