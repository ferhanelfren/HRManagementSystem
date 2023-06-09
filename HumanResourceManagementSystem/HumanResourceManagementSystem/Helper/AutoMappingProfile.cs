using AutoMapper;
using HumanResourceManagementSystem.Models.Identity;
using HumanResourceManagementSystem.ViewModels.Identity;

namespace HumanResourceManagementSystem.Helper
{
    public class AutoMappingProfile : Profile
    {
        public AutoMappingProfile()
        {
            CreateMap<HRMSUser, HRMSUserVm>().ReverseMap();
        }
    }
}
