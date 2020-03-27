using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace EventWebApp.Models
{
    public static class InitialData
    {
        public static void EnsurePopulated(IApplicationBuilder app)
        {
            AppDbContext context = app.ApplicationServices
                .GetRequiredService<AppDbContext>();
            context.Database.Migrate();
            context.Events.Add(new Event
            {
                name = "Test",
                date = new DateTime(1939, 9, 1)
            });
            if (context.empty == true)
            {
                context.empty = false;
                context.Events<Event>.AddRange(
                    new Event
                    {
                        name = "Hidden Cup 3 RO32 Qualifiers",
                        date = new DateTime(2020, 2, 17)
                    },
                    new Event
                    {
                        name = "Hidden Cup 3 RO16 Qualifiers",
                        date = new DateTime(2020,3,1)
                    },
                    new Event
                    {
                        name = "Hidden Cup 3 16 Bracket",
                        date = new DateTime(2020, 3, 19)
                    },
                    new Event
                    {
                        name = "Hidden Cup 3 16 Bracket 2",
                        date = new DateTime(2020, 3, 20)
                    },
                    new Event
                    {
                        name = "Hidden Cup 3 QF",
                        date = new DateTime(2020, 3, 21)
                    },
                    new Event
                    {
                        name = "Hiden Cup 3 SF",
                        date = new DateTime(2020, 3, 22)
                    },
                    new Event
                    {
                        name = "Hidden Cup 3 GrandFinals",
                        date = new DateTime(2020, 3, 22)
                    });
                context.SaveChanges();
            }
        }
    }
}
