import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextComponent } from "./input-text.component";

export default {
  title: 'InputComponent',
  component: InputTextComponent,
  decorators: [
    moduleMetadata({
      imports: [InputTextComponent, FormsModule, ReactiveFormsModule]
    })
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as Meta<InputTextComponent>;


const InitialTemplate: Story<InputTextComponent> = (args: InputTextComponent) => ({
  props: args
});

export const InitialStory = InitialTemplate.bind({});
InitialStory.args = {
  value: "Do some",
};
InitialStory.storyName = "Initial input";

const NgModelTemplate: Story<InputTextComponent> = (args: InputTextComponent) => ({
  props: {
    ...args,
    valueFromNgModel: "asd",
  },
  template: `
  <nuc-input
  [(ngModel)]="valueFromNgModel"
  [name]="name"
  [type]="type"
  [iconClassName]="iconClassName"
  [iconPosition]="iconPosition"
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

export const NgModelInputSearchTypeStory = NgModelTemplate.bind({});
NgModelInputSearchTypeStory.args = {
  value: 'oiuygbn',
  name: "nuc-input",
  type: "search",
};
NgModelInputSearchTypeStory.storyName = "NgModelInputSearchTypeStory ng-ui-core-input";

export const NgModelIconTypeStory = NgModelTemplate.bind({});
NgModelIconTypeStory.args = {
  value: 'oiuygbn',
  name: "nuc-input",
  type: 'icon',
  iconPosition: 'right',
  iconClassName: 'ri-user-search-fill'
};
NgModelIconTypeStory.storyName = "NgModelIconTypeStory ng-ui-core-input";

const FormControlInputTemplate: Story<InputTextComponent> = (args: InputTextComponent) => ({
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
