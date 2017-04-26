import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup } from '@angular/forms'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';

/** PrimeNG */
import { SplitButtonModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { MenubarModule, MenuItem } from "primeng/primeng";
import { PanelModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from "primeng/primeng";


/** SPA */
import { DatabaseInfoComponent } from './database-info/database-info.component';
import { DatabaseInfoService } from "./services/database-info.service";
import { ArticleService } from "./services/article.service";
import { TenantService } from "./services/tenant.service";
import { MessageStatusService } from "./services/message-status.service";
import { UserService } from "../app/admin/adminshared/user.service";

/** Added debug method to Onservable */
import { Observable } from "rxjs/Observable";
import { StoredProcedureInfoComponent } from './stored-procedure-info/stored-procedure-info.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListHeaderComponent } from './article-list-header/article-list-header.component';
import { MessageStatusComponent } from './message-status/message-status.component';
import { TenantComponent } from './tenant/tenant.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

import { AdminModule } from "./admin/admin.module";
// import { AdminComponent } from './admin/admin.component';
// import { SignUpComponent } from './admin/sign-up/sign-up.component';
// import { LoginComponent } from './admin/login/login.component';
// import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';

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


const routes: Routes = [
    {
        path: "", redirectTo: "dev-root", pathMatch: "full"
    },
    {
        path: "databaseinfo", component: DatabaseInfoComponent
    },
    {
        path: "storedprocedureinfo", component: StoredProcedureInfoComponent
    },
    {
        path: "articlelist", component: ArticleListComponent
    },
    {
        path: "messagestatus", component: MessageStatusComponent
    },
    {
        path: "tenant", component: TenantComponent
    },
    {
        path: "dynamicform", component: DynamicFormComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        DatabaseInfoComponent,
        StoredProcedureInfoComponent,
        ArticleListComponent,
        ArticleComponent,
        ArticleListHeaderComponent,
        MessageStatusComponent,
        TenantComponent,
        DynamicFormComponent,
        // AdminComponent,
        // SignUpComponent,
        // LoginComponent,
        // AdminMenuComponent
    ],
    imports: [
        AdminModule,
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule,
        ButtonModule,
        DataTableModule,
        FormsModule,
        HttpModule,
        MenubarModule,
        PanelModule,
        SharedModule,
        SplitButtonModule,
        RouterModule.forRoot(routes)
    ],
    providers: [ArticleService, DatabaseInfoService, MessageStatusService, TenantService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
