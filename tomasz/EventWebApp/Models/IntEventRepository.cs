using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventWebApp.Models
{
    public interface IntEventRepository
    {
        IQueryable<Event> Events { get; }

    }
}
