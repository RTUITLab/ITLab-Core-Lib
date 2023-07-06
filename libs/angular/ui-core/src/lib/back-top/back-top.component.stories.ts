import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BackTopComponent } from './back-top.component';
import { IconComponentModule } from '../icon/icon.component';

export default {
  title: 'BackTopComponent',
  component: BackTopComponent,
  decorators: [
    moduleMetadata({
      imports: [IconComponentModule],
    })
  ],
  argTypes: {
    threshold: {
      control: { type: 'number' },
    },
    style: {
      control: { type: 'object' },
    },
    class: {
      control: { type: 'text' },
    },
  }
} as Meta<BackTopComponent>;

const Template: Story<BackTopComponent> = (args: BackTopComponent) => ({
  props: args,
  template: `
  <div style="height: 200vh; border: 1px solid black; padding: 20px;">
    <div style="font-size: 20px;">Scroll me</div>
    <ng-ui-core-back-top></ng-ui-core-back-top>
  </div>
  `
});


export const Primary = Template.bind({});