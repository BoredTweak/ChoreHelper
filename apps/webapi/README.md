# Chore API

This application was generated using the `dotnet new webapi` command with .NET version `6.0.100-preview.7.21379.14`.

## Local Development

## Build

In order to build the WebAPI, run `dotnet build` from the [`./apps/webapi/`](/apps/webapi/) directory.

## Run

For a functioning instance of this WebAPI, you must be able to target a running Postgres database with the schema defined in [the root sql directory](../../sql/). [The root README](../../README.md) covers one mechanism to obtain a viable database. 

You will need to configure the connection string to your database. It is encouraged that you leverage the dotnet user-secrets tool to accomplish this. In order to configure a dotnet user-secret for the docker-compose instance of postgres mentioned in [the root README](../../README.md), run the following command from the [`./apps/webapi/`](/apps/webapi/) directory.

```cli
dotnet user-secrets set ConnectionStrings:ChoreDb "Username=docker;Password=docker;Host=host.docker.internal;Database=choredb;"
```

To run the webapi code locally, run `dotnet run` from the [`./apps/webapi/`](/apps/webapi/) directory.

### Entity Framework

The [WebAPI](./apps/webapi/) uses Entity Framework to establish it's data access layer. 

In order to scaffold the database (generate Entity Framework code) in the webapi project you must first install the Entity Framework .NET CLI tools. `dotnet tool install --global dotnet-ef`

In order to update the scaffolded code first start up the docker-compose database instance per [the Database section of the README](#database).

Then run the following command from `./apps/webapi/`

```cli
dotnet ef dbcontext scaffold "Username=docker;Password=docker;Host=host.docker.internal;Database=choredb;" Npgsql.EntityFrameworkCore.PostgreSQL -o NewModels --no-onconfiguring --context-namespace Models
```

Delete [the Models directory](apps/webapi/Models/).

Rename the NewModels directory to Models.

For more information on Entity Framework look [here](https://docs.microsoft.com/en-us/ef/core/cli/dotnet)
