using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EventWebApp.Models;

namespace EventWebApp.Controllers
{
    public class EventController :Controller
    {
        private IntEventRepository repository;
        public EventController (IntEventRepository repo)
        {
            repository = repo;
        }
        public ViewResult EventList() => View(repository.Events);
    }
}
