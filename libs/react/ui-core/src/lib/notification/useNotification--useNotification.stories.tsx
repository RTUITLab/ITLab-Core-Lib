import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useNotification } from './useNotification';

export default {
  component: useNotification,
  title: 'useNotification',
} as ComponentMeta<typeof useNotification>;

const Template: ComponentStory<typeof useNotification> = (args) => (
  <useNotification {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
