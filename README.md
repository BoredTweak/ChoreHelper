# ChoreHelper

It's easy to get behind in home maintenance/chores and it's easy to stop seeing the tasks that need to be done. Rather than relying on someone else to communicate the problems, ChoreHelper aims to offer you an option so you can fix the problem yourself.

## Prerequisites

- [.NET 5.0](https://dotnet.microsoft.com/download/dotnet/5.0)
- [Node](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop)

## Local Development

For Angular local development insights view the readme [here](./apps/choreui/README.md).

### WebAPI

In order to build the WebAPI, run ```dotnet build``` from the [```./apps/webapi/```](/apps/webapi/) directory.

You will need to configure the connection string to your database. It is encouraged that you leverage the dotnet user-secrets tool to accomplish this. In order to configure a dotnet user-secret for the docker-compose instance of postgres, run the following command from the [```./apps/webapi/```](/apps/webapi/) directory.

```
dotnet user-secrets set ConnectionStrings:ChoreDb "Username=docker;Password=docker;Host=host.docker.internal;Database=choredb;"
```

To run the webapi code locally, run ```dotnet run``` from the [```./apps/webapi/```](/apps/webapi/) directory.


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

### Entity Framework

The [WebAPI](./apps/webapi/) uses Entity Framework to establish it's data access layer. 

In order to scaffold the database (generate Entity Framework code) in the webapi project you must first install the Entity Framework .NET CLI tools.
```
dotnet tool install --global dotnet-ef
```

In order to update the scaffolded code first start up the docker-compose database instance per [the Database section of the README](#database).

Then run the following command from ```./apps/webapi/```
```
dotnet ef dbcontext scaffold "Username=docker;Password=docker;Host=host.docker.internal;Database=choredb;" Npgsql.EntityFrameworkCore.PostgreSQL -o NewModels --no-onconfiguring --context-namespace Models
``` 

Delete [the Models directory](apps/webapi/Models/).

Rename the NewModels directory to Models.

For more information on Entity Framework look [here](https://docs.microsoft.com/en-us/ef/core/cli/dotnet)
