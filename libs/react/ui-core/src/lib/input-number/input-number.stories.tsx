import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputNumber } from './input-number';

export default {
  component: InputNumber,
  title: 'InputNumber',
  argTypes: {

  }
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  step: 1,
  min: -5,
  max: 11,
};

export const Float = Template.bind({});
Float.args = {
  step: 0.5,
  min: -5,
  max: 11,
};
