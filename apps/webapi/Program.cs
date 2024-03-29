using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Models;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetSection("ConnectionStrings")["ChoreDb"].ToString();
builder.Services.AddDbContext<choredbContext>(options => options.UseNpgsql(connectionString));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Chore API", Version = "v1" });
});


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
                    {
                        builder.AllowAnyOrigin()
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                    });
});

var app = builder.Build();

if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Chore API V1");
});

app.UseHttpsRedirection();
app.UseCors();

app.MapGet("/chores", async ([FromServices] choredbContext _dbContext) =>
{
    var chores = await _dbContext.Chores.ToListAsync();
    var rng = new Random();
    return chores[rng.Next(0, chores.Count - 1)];
});

app.Run();
