import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import {CommonModule} from "@angular/common";
import {BadgeModule} from "../badge";

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BadgeModule],
      declarations: [ButtonComponent],
    })
  ],
} as Meta<ButtonComponent>;

const InitialButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const InitialButtonStory = InitialButtonTemplate.bind({});
InitialButtonStory.args = {
  label: 'Press',
  badge: '2'
};
InitialButtonStory.storyName = "InitialButtonStory button"

