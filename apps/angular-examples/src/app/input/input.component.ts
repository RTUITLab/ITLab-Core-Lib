import { Component } from '@angular/core';
import { InputComponent as NucInputComponent } from '@rtuitlab/ng-ui-core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'ae-input',
  template: `
    <h3>Ng model</h3>
    <nuc-input
      [(ngModel)]="valueFromNgModel"
      name="model"
      errorText="asd"
      placeholder="sad"
      required
    ></nuc-input>

    <p>Value from NgModel {{valueFromNgModel}}</p>

    <h3>FormControl</h3>
    <nuc-input
      [formControl]="formControl"
      [name]="name"
      errorText="asd"
    ></nuc-input>

    <p>Value from FormControl {{formControl.value}}</p>
  `,
  imports: [NucInputComponent, FormsModule, ReactiveFormsModule],
})
export class InputComponent {
  formControl = new FormControl('', Validators.required)
  name = "Input"
  valueFromNgModel = ''
  label = "Label message"
}
