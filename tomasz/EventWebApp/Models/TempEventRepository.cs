using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventWebApp.Models
{
    public class TempEventRepository : IntEventRepository
    {
        public IQueryable<Event> Events => new List<Event>
            {
            new Event { name ="Hidden Cup 3 Start of Main event", date=new DateTime(2020,3,20, 16, 30, 0)},
            new Event { name = "X", date=new DateTime(1939, 1, 9)},
            new Event { name= "Hidden Cup 3 SemiFinals", date=new DateTime(2020,3,22,16,30,0)}
        }.AsQueryable<Event>();

    }
}
