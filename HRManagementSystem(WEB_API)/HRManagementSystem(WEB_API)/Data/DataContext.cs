using HRManagementSystem_WEB_API_.Models;
using Microsoft.EntityFrameworkCore;

namespace HRManagementSystem_WEB_API_.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<AppUser> Users { get; set; }

    }
}
