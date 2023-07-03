import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AlertComponent } from './alert.component';
import { IconComponentModule } from '../icon/icon.component';

export default {
  title: 'AlertComponent',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [IconComponentModule],
    })
  ],
} as Meta<AlertComponent>;

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}