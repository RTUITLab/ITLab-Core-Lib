import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CurrencyInput } from './currency-input';
import Icon from '../icon/icon'

export default {
  component: CurrencyInput,
  title: 'CurrencyInput',
  argTypes: {
    min: { control: {type: 'text'}},
    max: { control: {type: 'text'}},
    className: { control: {type: 'text'}},
    currency: { control: {type: 'select', options: ['₽', '$', '€', '£', '¥']}, table: {defaultValue: {summary: '₽'}}},
    informationPosition: { control: {type: 'select', options: ["left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"]},
      table: {defaultValue: {summary: 'right'}}},
    isRequired: {table: {defaultValue: {summary: 'false'}},},
    readonly: {table: {defaultValue: {summary: 'false'}},},
    disabled: {table: {defaultValue: {summary: 'false'}},},
    invalid: {table: {defaultValue: {summary: 'false'}},},
    isSuccess: {table: {defaultValue: {summary: 'false'}},},
    autoFocus: {table: {defaultValue: {summary: 'false'}},},
  }
} as ComponentMeta<typeof CurrencyInput>;

const Template: ComponentStory<typeof CurrencyInput> = (args) => (
  <CurrencyInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  displayInformation: true,
  informationPosition: 'right',
  information: {
    title: 'Title',
    description: 'description'
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <Icon name={'ri-price-tag-3-line'} />,
  displayInformation: true,
  defaultValue: 0,
  isSuccess: true,
  informationPosition: 'right',
  information: {
    title: 'Title',
    description: 'description'
  },
};

export const MinMax = Template.bind({});
MinMax.args = {
  displayInformation: true,
  min: -100,
  max: 100000,
  defaultValue: 0,
  informationPosition: 'right',
  information: {
    title: 'Title',
    description: 'description'
  },
};
