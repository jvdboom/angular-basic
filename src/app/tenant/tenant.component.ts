import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from "@angular/forms";

import { TenantService } from "../services/tenant.service";
import { Tenant } from "../models/tenant";
import { Lesson } from "../models/lesson";

import { DurationValidator } from "./validate-duration.directive";
import { validateDuration } from "./validateDuration";

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  public cTenants$: Observable<Tenant[]>;
  public cTenantsTest$: Observable<Tenant[]>;


  myForm: FormGroup;

  duration = new FormControl(10, [validateDuration]);

  lesson = new Lesson("Title goes here", 0, "Description goes here");

  constructor(private tenantService: TenantService) { }

  ngOnInit() {
    this.cTenants$ = this.tenantService.getTenantsOrg();
    //this.cTenantsTest$ = this.tenantService.getTenants();
  }



  createLesson(form) {
    console.log("Lesson Value:", this.lesson, form);
    debugger;
  }


  summaryStatus(summary) {
    return {
      color: !summary.valid && !summary.pristine ? 'red' : 'black'
    }
  }



}
