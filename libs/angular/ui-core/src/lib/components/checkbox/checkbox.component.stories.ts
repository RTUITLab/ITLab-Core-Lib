import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

export default {
  title: 'CheckboxComponent',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [CheckboxComponent, FormsModule, ReactiveFormsModule]
    })
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    setDisabledState: {control: false},
    registerOnTouched: {control: false},
    registerOnChange: {control: false},
    writeValue: {control: false},
    blur: {control: false},
    focus: {control: false},
    onBlur: {control: false},
    onFocus: {control: false},
    handleChange: {control: false},
    onClick: {control: false},
    updateModel: {control: false},
    ngOnChanges: {control: false},
    changeCb: {control: false},
    inputViewChild: {control: false}
  }
} as Meta<CheckboxComponent>;


const InitialTemplate: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args
});

export const InitialCheckboxStory = InitialTemplate.bind({});
InitialCheckboxStory.args = {
  value: "Do some",
  label: "Label message"
};
InitialCheckboxStory.storyName = "Initial checkbox";

const NgModelTemplate: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: {
    ...args,
    valueFromNgModel: false,
    label: "Label message"
  },
  template: `
  <nuc-checkbox
  [(ngModel)]="valueFromNgModel"
  label="Label message: inner value {{valueFromNgModel}}"
  [name]="name"
  ></nuc-checkbox>

  <p>Value from NgModel {{valueFromNgModel}}</p>
  `
});
export const NgModelCheckboxStory = NgModelTemplate.bind({});
NgModelCheckboxStory.args = {
  value: false,
  name: "Checkbox"
};
NgModelCheckboxStory.storyName = "NgModelCheckboxStory checkbox";

const FormControlCheckboxTemplate: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: {
    ...args,
    valueFromNgModel: false,
    label: "Label message"
  },
  template: `
  <nuc-checkbox
  [formControl]="formControl"
  label="Label message: inner value {{formControl.value}}"
  [name]="name"
  ></nuc-checkbox>

  <p>Value from outside {{formControl.value}}</p>
  `
});
export const FormControlCheckboxStory = FormControlCheckboxTemplate.bind({});
FormControlCheckboxStory.args = {
  formControl: new FormControl(false),
  name: "Checkbox"
};
FormControlCheckboxStory.storyName = "FormControlCheckboxStory checkbox";
