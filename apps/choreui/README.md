# ChoreUI Angular Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

Note that instructions for running this application in combination with other services/dependencies will be maintained in [the README in the root directory](../../README.md).

- [ChoreUI Angular Application](#choreui-angular-application)
  - [Local Development](#local-development)
    - [Configuration](#configuration)
    - [Code scaffolding](#code-scaffolding)
    - [Build](#build)
    - [Running unit tests](#running-unit-tests)
    - [Running end-to-end tests](#running-end-to-end-tests)
    - [Containerization](#containerization)
  - [Additional Documentation](#additional-documentation)

## Local Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Configuration

The Chore service URL needs to be configured in [the relevant environment's config files](./src/assets/). 

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Containerization

The [Dockerfile](./Dockerfile) hosts the production build of the Angular application in an nginx docker image. The nginx image uses [the nginx.conf file here](nginx.conf).

## Additional Documentation

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
