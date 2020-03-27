using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventWebApp.Models.User
{
    public class User
    {
        public int UserID { get; set; }
        public String Username { get; set; }
        public HashCode Userhash { get; set; }
        public String UserPerm { get; set; }
        public String contactInfo { get; set; }

    }
}
