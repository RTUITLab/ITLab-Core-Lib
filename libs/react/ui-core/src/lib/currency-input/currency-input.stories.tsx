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
    currency: { control: {type: 'select', options: ['₽', '$', '€', '£', '¥']}},
    informationPosition: { control: {type: 'select', options: ["left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right", "left-top", "left-bottom", "right-top", "right-bottom"]}},
  }
} as ComponentMeta<typeof CurrencyInput>;

const Template: ComponentStory<typeof CurrencyInput> = (args) => (
  <CurrencyInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  displayInformation: true,
  informationPosition: 'right',
  defaultValue: 2500,
  information: {
    title: 'Title',
    description: 'description'
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <Icon name={'ri-price-tag-3-line'} />,
  displayInformation: true,
  defaultValue: 2000,
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
  defaultValue: -1000000,
  informationPosition: 'right',
  information: {
    title: 'Title',
    description: 'description'
  },
};
