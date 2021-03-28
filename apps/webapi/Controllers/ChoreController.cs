using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("chores")]
    public class ChoreController : ControllerBase
    {
        private readonly ILogger<ChoreController> _logger;
        private readonly choredbContext _dbContext;

        public ChoreController(ILogger<ChoreController> logger, choredbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var chores = _dbContext.Chores.ToArray();
            var rng = new Random();
            var output = chores[rng.Next(0,chores.Length - 1)];
            return Ok(output);
        }
    }
}
