import { Component, OnInit, VERSION } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  name: string;
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.name = `Angular! v${VERSION.full}`
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: 'Michael',
      lastname: 'Chiche',
    })
  }

  toggleForm() {

    console.log(this.form);
    this.form = this.fb.group({
      "firstname": new FormControl({ value: this.form.get("firstname").value, disabled: true }), // [this.countryCode.Name, [Validators.required, Validators.minLength(2), Validators.maxLength(75)]], disabled: true,
      "lastname": new FormControl({ value: this.form.get("lastname").value, disabled: true }), // [this.countryCode.Name, [Validators.required, Validators.minLength(2), Validators.maxLength(75)]], disabled: true,
    });

    setTimeout(() => {
      this.form.get("firstname").disable();
      this.form.get("lastname").disable();
    }, 10);


    // console.log(`${this.form.controls[0].value}`);



    // this.form.controls.array.forEach(element => {
    //   console.log(element);
    // });

    // this.form.controls["firstname"].valueChanges
    //   .subscribe(v => {
    //     this.completeValueChange("firstname", v, false);
    //   }
    //   );

    // let control = this.form.get('firstname');
    // control.disabled ? control.enable() : control.disable();


    // this.form.controls["firstname"].valueChanges
    //   .subscribe(v => {
    //     this.completeValueChange("firstname", v, false);
    //   }
    //   );


    // for (let cnt of Object(this.form.controls)) {
    //   console.log(cnt.name);
    //   //cnt.enable() = !cnt.enable();
    // }

    // Object.keys(this.form).forEach(name => {

    // });

    // Object.keys(this.form).forEach(name => {

    // });
  }

  completeValueChange(field: string, value: boolean, disable: boolean) {
    this.form.controls[field]
      .setValue({ value: JSON.stringify(value), enabled: disable }, { onlySelf: true });
  }

  // setValue(value: any, { onlySelf, emitEvent, emitModelToViewChange, emitViewToModelChange }: {
  //   onlySelf?: boolean,
  //   emitEvent?: boolean,
  //   emitModelToViewChange?: boolean,
  //   emitViewToModelChange?: boolean
  // } = {}): void {
  //   // this._value = value;
  //   // if (this._onChange.length && emitModelToViewChange !== false) {
  //   //   this._onChange.forEach((changeFn) => changeFn(this._value, emitViewToModelChange !== false));
  //   // }
  //   // this.updateValueAndValidity({ onlySelf, emitEvent });
  // }

}
