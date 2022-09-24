using Microsoft.AspNetCore.Mvc;

namespace EclipseEvent.WebApi.Controllers.Api;

[Route("api/[controller]")]
public sealed class HealthController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return Ok("Healthy");
    }
}