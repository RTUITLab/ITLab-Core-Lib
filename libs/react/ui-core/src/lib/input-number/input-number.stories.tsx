import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputNumber } from './input-number';

export default {
  component: InputNumber,
  title: 'InputNumber',
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
