using Microsoft.EntityFrameworkCore;

namespace PropertyRental.Models
{

    /* 
        Run migrations everytime something changes on the models
        - dotnet ef migrations add <someName>
        - dotnet ef database update
    */
    
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        // specify which of your models will become tables in the DB
        public DbSet<Property> Properties {get; set;}

        // public DbSet<User> Users {get; set;}
        // public DbSet<Order> Orders {get; set;}
    }
}