
namespace PropertyRental.Models
{
    public class Property
    {
        public int Id {get; set;}
        public string Title {get; set;}
        public int Rooms {get; set;}
        public int Bathrooms {get; set;}
        public decimal Price {get; set;}
        public int Area {get; set;}
        public string ImageUrl {get; set;}
        public string Description {get; set;}

    }
}