# BasicAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Steps:

install:    "font-awesome": "^4.7.0"
            "primeng":"4.0.0-rc.2"

Change app.module.ts

    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';...

    import { SplitButtonModule } from 'primeng/primeng';
    import { ButtonModule } from 'primeng/primeng';...       

       imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    HttpModule,
    SplitButtonModule
    ...


    make a git directory.

    git remote add origin https://github.com/jvdboom/angular-basic.git
    git push -u origin master
    ...

    npm install @types/lodash


    20170426
    Trying to build in some authorization/authentication