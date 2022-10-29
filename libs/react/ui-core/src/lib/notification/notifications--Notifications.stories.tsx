import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notifications } from './notifications';

export default {
  component: Notifications,
  title: 'Notifications',
} as ComponentMeta<typeof Notifications>;

const Template: ComponentStory<typeof Notifications> = (args) => (
  <Notifications {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
