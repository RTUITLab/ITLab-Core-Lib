import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input.component";

export default {
  title: 'InputComponent',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [InputComponent, FormsModule, ReactiveFormsModule]
    })
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as Meta<InputComponent>;


const InitialTemplate: Story<InputComponent> = (args: InputComponent) => ({
  props: args
});

export const InitialStory = InitialTemplate.bind({});
InitialStory.args = {
  value: "Do some",
};
InitialStory.storyName = "Initial input";

const NgModelTemplate: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    ...args,
    valueFromNgModel: "asd",
  },
  template: `
  <nuc-input
  [(ngModel)]="valueFromNgModel"
  [name]="name"
  ></nuc-input>

  <p>Value from NgModel {{valueFromNgModel}}</p>
  `
});
export const NgModelInputStory = NgModelTemplate.bind({});
NgModelInputStory.args = {
  value: 'oiuygbn',
  name: "nuc-input"
};
NgModelInputStory.storyName = "NgModelInputStory ng-ui-core-input";

const FormControlInputTemplate: Story<InputComponent> = (args: InputComponent) => ({
  props: {
    ...args,
    valueFromNgModel: false,
  },
  template: `
  <nuc-input
  [formControl]="formControl"
  [name]="name"
  ></nuc-input>

  <p>Value from formControl {{formControl.value}}</p>
  `
});
export const FormControlInputStory = FormControlInputTemplate.bind({});
FormControlInputStory.args = {
  formControl: new FormControl('asdads'),
  name: "nuc-input"
};
FormControlInputStory.storyName = "FormControlInputStory ng-ui-core-input";
