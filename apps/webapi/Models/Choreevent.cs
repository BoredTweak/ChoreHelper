using System;
using System.Collections.Generic;

#nullable disable

namespace webapi.Models
{
    public partial class Choreevent
    {
        public Guid Id { get; set; }
        public Guid Choreid { get; set; }
        public DateTime? Eventdate { get; set; }

        public virtual Chore Chore { get; set; }
    }
}
