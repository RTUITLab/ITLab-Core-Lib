import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputNumber } from './input-number';

export default {
  component: InputNumber,
  title: 'InputNumber',
  argTypes: {
    min: { control: {type: 'number'}},
    max: { control: {type: 'number'}},
    className: { control: {type: 'text'}},
  }
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  step: 1,
};

export const Float = Template.bind({});
Float.args = {
  step: 0.5,
};