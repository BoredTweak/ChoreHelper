# ChoreHelper

It's easy to get behind in home maintenance/chores and it's easy to stop seeing the tasks that need to be done. Rather than relying on someone else to communicate the problems, ChoreHelper aims to offer you an option so you can fix the problem yourself.

- [ChoreHelper](#chorehelper)
  - [Prerequisites](#prerequisites)
  - [Local Development](#local-development)
    - [Database](#database)
    - [Docker Images](#docker-images)

## Prerequisites

- [.NET 5.0](https://dotnet.microsoft.com/download/dotnet/5.0)
- [Node](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop)

## Local Development

For development insights specific to the Angular ChoreUI application view the readme [here](./apps/choreui/README.md).
For development insights specific to the .NET WebAPI application view the readme [here](./apps/webapi/README.md).

### Database

You can spin up an instance of postgres via docker-compose. Run ```docker-compose up``` from the root directory and wait for Flyway to complete it's migration. For more information on Flyway Migrations see [here](https://flywaydb.org/documentation/concepts/migrations). 

To connect to the desktop via PgAdmin open a browser to [localhost:5431](http://localhost:5431/) then perform the following tasks. 

Right click the Servers node in the left-side browser and click Create > Server. 
Enter a name in the General tab.
Click the Connection tab.
Enter ```host.docker.internal``` in the Host name/address field. 
Enter ```docker``` in the user name and in the password field.
Click the Save button.

### Docker Images

For more information on the Docker images used in this repository refer to the following links:
- [Flyway](https://hub.docker.com/r/flyway/flyway)
- [PgAdmin](https://hub.docker.com/r/dpage/pgadmin4/)
- [Postgres](https://hub.docker.com/_/postgres)
- [ASP.NET SDK](https://hub.docker.com/_/microsoft-dotnet-sdk)
- [ASP.NET Runtime](https://hub.docker.com/_/microsoft-dotnet-aspnet)
- [node](https://hub.docker.com/_/node)
- [nginx](https://hub.docker.com/_/nginx)

