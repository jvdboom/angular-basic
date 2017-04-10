import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';

/** PrimeNG */
import { SplitButtonModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { MenubarModule, MenuItem } from "primeng/primeng";


/** SPA */
import { DatabaseInfoComponent } from './database-info/database-info.component';

/** Added debug method to Onservable */
import { Observable } from "rxjs/Observable";
Observable.prototype.debug = function (aMessage: string) {
    // TODO: Find a way to use Global.debug!!
    const debug: boolean = true;
    return this.do(
        nextValue => {
            if (debug) {
                console.log(aMessage, nextValue);
            }
        },
        error => {
            if (debug) {
                console.error(aMessage, error);
            }
        },
        () => {
            if (debug) {
                console.log("Observable completed - ", aMessage);
            }
        }
    );
};

declare module "rxjs/Observable" {
    interface Observable<T> {
        debug: (...any) => Observable<T>;
    }
}
/**  */


const routes: Routes=[
  {
    path: "", redirectTo: "dev-root", pathMatch: "full"
  },
  {
    path: "databaseinfo", component: DatabaseInfoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DatabaseInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    HttpModule,
    MenubarModule,
    SplitButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
