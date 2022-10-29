import { ComponentStory, ComponentMeta } from '@storybook/react';
import { contextHolder } from './useNotification';

export default {
  component: contextHolder,
  title: 'contextHolder',
} as ComponentMeta<typeof contextHolder>;

const Template: ComponentStory<typeof contextHolder> = (args) => (
  <contextHolder {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
