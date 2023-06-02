using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace HumanResourceManagementSystem.Identity
{
    public class ClaimNames
    {
        public const string UserId = "user_guid";
        public const string UserName = "user_name";
        public const string DisplayName = "display_name";
        public const string OriginDb = "origin_db";
        public const string Email = "email_address";
        public const string RoleType = ClaimTypes.Role; //ClaimTypes.Role;
        public const string TokenExpiry = JwtRegisteredClaimNames.Exp;
    }
}
