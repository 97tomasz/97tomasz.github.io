using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventWebApp.Models
{
    public class EventRepository : IntEventRepository
    {
        private AppDbContext context;
        public EventRepository(AppDbContext ctx)
        {
            context = ctx;
        }
        public IQueryable<Event> Events => context.Events;
    }
}
