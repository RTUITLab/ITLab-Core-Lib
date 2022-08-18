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
    informationPosition: { control: {type: 'select', options: ["left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"]}},
  }
} as ComponentMeta<typeof CurrencyInput>;

const Template: ComponentStory<typeof CurrencyInput> = (args) => (
  <CurrencyInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 1000,
  displayInformation: true,
  informationPosition: 'bottom',
  information: {
    title: 'Title',
    description: 'description'
  },
};
