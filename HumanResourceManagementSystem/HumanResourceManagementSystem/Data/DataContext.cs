using HRManagementSystem_MVC_.Models;
using HumanResourceManagementSystem.Models;
using HumanResourceManagementSystem.Models.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace HumanResourceManagementSystem.Data
{
    public class DataContext : IdentityDbContext<HRMSUser>
    {

        public DbSet<Positions> Positions { get; set; }
        public DbSet<Departments> Departments { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            
            base.OnModelCreating(builder);
        }
    }
}
