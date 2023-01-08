import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { InputNumberComponent as NucInputNumberComponent } from "@rtuitlab/ng-ui-core";

@Component({
  standalone: true,
  selector: 'ae-input-number',
  template: `
    <h3>Ng model</h3>
    <nuc-input-number
      inputId="n1"
      [(ngModel)]="valueFromNgModel"
      name="model1"
      errorText="asd"
      [step]="1.1"
      placeholder="Введите номер"
      required
    ></nuc-input-number>

    <h3>FormControl</h3>
    <nuc-input-number
      [formControl]="formControl"
      [name]="name"
      [step]="1.1"
      errorText="asd"
    ></nuc-input-number>

    <p>Value from FormControl {{formControl.value}}</p>
  `,
  imports: [FormsModule, ReactiveFormsModule, NucInputNumberComponent],
})
export class InputNumberComponent {
  formControl = new FormControl('', Validators.required)
  name = "Input"
  valueFromNgModel = 0
}
