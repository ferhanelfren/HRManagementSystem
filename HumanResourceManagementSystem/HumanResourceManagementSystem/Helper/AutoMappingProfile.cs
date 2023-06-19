using AutoMapper;
using HumanResourceManagementSystem.Models;
using HumanResourceManagementSystem.Models.Identity;
using HumanResourceManagementSystem.ViewModels;
using HumanResourceManagementSystem.ViewModels.Identity;
using Namotion.Reflection;

namespace HumanResourceManagementSystem.Helper
{
    public class AutoMappingProfile : Profile
    {
        public AutoMappingProfile()
        {
            //CreateMap<HRMSUser, HRMSUserVm>().ReverseMap();
            CreateMap<Positions, string>().ConvertUsing(src => src != null ? src.PositionName : string.Empty);
            CreateMap<HRMSUser, EmployeeVM>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}"))
                .ForMember(dest => dest.Positions, opt => opt.MapFrom(src => src.Positions)) // Map Positions.PositionName
                .ForMember(dest => dest.Degree, opt => opt.MapFrom(src => src.DegreeEarned))
                .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.PhoneNumber))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.DateHired, opt => opt.MapFrom(src => src.DateHired));
        }
    }
}
