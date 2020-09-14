using Microsoft.AspNetCore.Mvc;
using PropertyRental.Models;
using System.Collections.Generic;
using System.Linq;

namespace PropertyRental.Controllers 
{

    public class CatalogController : Controller
    {
        private DataContext dbContext;
        
        public CatalogController(DataContext db)
        {
            this.dbContext = db;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        public IActionResult AllProperties()
        {
            var list = dbContext.Properties.ToList();
            return Json(list);
        }
        
        [HttpPost]
        public IActionResult RegisterProperty ( [FromBody] Property newProp)
        {
            System.Console.WriteLine("Creating a new Property");

            // save the obj to a DB

            dbContext.Properties.Add(newProp);
            dbContext.SaveChanges();

            return Json(newProp);
        }
    }
}


/// ORM 