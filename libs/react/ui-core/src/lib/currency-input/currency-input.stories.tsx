import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CurrencyInput } from './currency-input';

export default {
  component: CurrencyInput,
  title: 'CurrencyInput',
  argTypes: {
    min: { control: {type: 'text'}},
    max: { control: {type: 'text'}},
    className: { control: {type: 'text'}},
    currency: { control: {type: 'select', options: ['₽', '$', '€', '£', '¥']}},
  }
} as ComponentMeta<typeof CurrencyInput>;

const Template: ComponentStory<typeof CurrencyInput> = (args) => (
  <CurrencyInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
