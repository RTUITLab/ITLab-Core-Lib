import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputNumber } from './input-number';

export default {
  component: InputNumber,
  title: 'InputNumber',
  argTypes: {
    min: { control: {type: 'number'}},
    max: { control: {type: 'number'}},
    className: { control: {type: 'text'}},
    disabled: {table: {defaultValue: {summary: 'false'}},},
    isRequired: {table: {defaultValue: {summary: 'false'}},},
    readonly: {table: {defaultValue: {summary: 'false'}},},
    autoFocus: {table: {defaultValue: {summary: 'false'}},},
  }
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  step: 1,
  defaultValue: 1000,
};

export const Float = Template.bind({});
Float.args = {
  step: 0.5,
};

export const MinMax = Template.bind({});
MinMax.args = {
  step: 0.5,
  min: -10,
  max: 10000
};

export const WithoutButtons = Template.bind({});
WithoutButtons.args = {
  step: 10,
  displayButtons: false
};
