import { NgModule } from "@angular/core"; // decorator
import { CommonModule } from "@angular/common"; // directives
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AdminComponent } from "./admin.component";
import { AdminMenuComponent } from "./admin-menu/admin-menu.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

import { UserService } from "./adminshared/user.service";

const AdminRoutes: Routes = [{
    path: "admin", component: AdminComponent,
    children: [
        { path: "login", component: LoginComponent },
        { path: "signup", component: SignUpComponent },
        { path: "", component: AdminMenuComponent, canActivate: [UserService] }
    ]
}];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AdminRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        LoginComponent,
        SignUpComponent
    ],
    providers: [
        UserService,
    ]
})
export class AdminModule { }

