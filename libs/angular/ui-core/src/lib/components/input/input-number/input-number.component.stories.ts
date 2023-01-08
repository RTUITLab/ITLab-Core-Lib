import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputNumberComponent } from "./input-number.component";

export default {
  title: 'InputNumberComponent',
  component: InputNumberComponent,
  decorators: [
    moduleMetadata({
      imports: [InputNumberComponent, FormsModule, ReactiveFormsModule]
    })
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as Meta<InputNumberComponent>;


const InitialTemplate: Story<InputNumberComponent> = (args: InputNumberComponent) => ({
  props: args
});

export const InitialStory = InitialTemplate.bind({});
InitialStory.args = {
  value: 0,
};
InitialStory.storyName = "Initial input";

const NgModelTemplate: Story<InputNumberComponent> = (args: InputNumberComponent) => ({
  props: {
    ...args,
    valueFromNgModel: 0,
  },
  template: `
  <nuc-input-number
  [inputId]="1"
  [(ngModel)]="valueFromNgModel"
  [name]="name"
  ></nuc-input-number>

  <p>Value from NgModel {{valueFromNgModel}}</p>
  `
});
export const NgModelInputStory = NgModelTemplate.bind({});
NgModelInputStory.args = {
  name: "nuc-input-number"
};
NgModelInputStory.storyName = "NgModelInputStory ng-ui-core-input";

export const NgModelNoActionsStory = NgModelTemplate.bind({});
NgModelNoActionsStory.args = {
  name: "nuc-input-number",
  showActionsButtons: false
};
NgModelNoActionsStory.storyName = "NgModelNoActionsStory ng-ui-core-input";

const FormControlInputTemplate: Story<InputNumberComponent> = (args: InputNumberComponent) => ({
  props: {
    ...args,
    valueFromNgModel: 1,
  },
  template: `
  <nuc-input-number
  [formControl]="formControl"
  [name]="name"
  [inputId]="1"
  ></nuc-input-number>

  <p>Value from formControl {{formControl.value}}</p>
  `
});
export const FormControlInputStory = FormControlInputTemplate.bind({});
FormControlInputStory.args = {
  formControl: new FormControl(0),
  name: "nuc-input-number"
};
FormControlInputStory.storyName = "FormControlInputStory ng-ui-core-input";
