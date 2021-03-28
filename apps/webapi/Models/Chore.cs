using System;
using System.Collections.Generic;

#nullable disable

namespace webapi.Models
{
    public partial class Chore
    {
        public Chore()
        {
            Choreevents = new HashSet<Choreevent>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public int? Frequencydays { get; set; }

        public virtual ICollection<Choreevent> Choreevents { get; set; }
    }
}
