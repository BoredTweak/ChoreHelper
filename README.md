# ChoreHelper

It's easy to get behind in home maintenance/chores and it's easy to stop seeing the tasks that need to be done. Rather than relying on someone else to communicate the problems, ChoreHelper aims to offer you an option so you can fix the problem yourself.

- [ChoreHelper](#chorehelper)
  - [Prerequisites](#prerequisites)
    - [.NET 5.0](#net-50)
    - [Node](#node)
    - [Docker](#docker)
    - [Postman](#postman)
    - [Newman](#newman)
  - [Local Development](#local-development)
    - [Database](#database)
    - [Docker Images](#docker-images)
  - [Local Testing](#local-testing)
    - [Integration Tests](#integration-tests)
    - [Cleanup](#cleanup)
    - [Build](#build)

## Prerequisites

### .NET 5.0

.NET is the framework under the WebAPI application

For more information look [here](https://dotnet.microsoft.com/download/dotnet/5.0).

### Node

Node is the runtime under the Angular application

For more information look [here](https://nodejs.org/en/download/)

### Docker

Docker is leveraged for automation and assures boundary separation

For more information look [here](https://www.docker.com/products/docker-desktop)

### Postman

API integration tests are written in Postman

For more information look [here](https://www.postman.com/)

### Newman 

Extracted Postman tests are run via Newman

For more information look [here](https://www.npmjs.com/package/newman)


## Local Development

**For development insights specific to the Angular ChoreUI application view the readme [here](./apps/choreui/README.md).**

**For development insights specific to the .NET WebAPI application view the readme [here](./apps/webapi/README.md).**

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

## Local Testing

A [docker-compose-full-integration](docker-compose-full-integration.yml) definition file is available for use which establishes a full application stack for local testing. 

To run the docker-compose run
```
docker-compose -f .\docker-compose-full-integration.yml up
```

To view the Chore UI, navigate to [localhost:4200](http://localhost:4200)

To view the WebAPI, navigate to [localhost:5000](http://localhost:5000)

### Integration Tests

The API integration tests are written in Postman and run via the following command in the root directory.
```
newman run .\tests\Chores.postman_collection.json
```

### Cleanup

To clean up the containers use Ctrl+C followed by running
```
docker-compose -f .\docker-compose-full-integration.yml down
```

### Build

If the images are stale and you wish to rebuild them run
```
docker-compose -f .\docker-compose-full-integration.yml build
```

