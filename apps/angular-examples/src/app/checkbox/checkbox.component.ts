import { Component } from '@angular/core';
import { CheckboxComponent as NucCheckboxComponent } from '@rtuitlab/ng-ui-core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'ae-checkbox',
  template: `
    <h3>Ng model</h3>
    <nuc-checkbox
      [(ngModel)]="valueFromNgModel"
      label="Label message: inner value {{valueFromNgModel}}"
      [name]="name"
    ></nuc-checkbox>

    <p>Value from NgModel {{valueFromNgModel}}</p>

    <h3>FormControl</h3>
    <nuc-checkbox
      [formControl]="formControl"
      label="Label message: inner value {{formControl.value}}"
      [name]="name"
    ></nuc-checkbox>

    <p>Value from outside {{formControl.value}}</p>
  `,
  imports: [NucCheckboxComponent, ReactiveFormsModule, FormsModule],
})
export class CheckboxComponent {

  formControl = new FormControl(false)
  name = "Checkbox"
  valueFromNgModel = false
  label = "Label message"
}
