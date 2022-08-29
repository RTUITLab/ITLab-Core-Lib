import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';
import Icon from '../icon/icon'

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    icon: { control: false },
    className: {control: {type: 'text'}},
    iconPosition: {
      table: {defaultValue: {summary: 'left'}}
    },
    type: {
      table: {defaultValue: {summary: 'solid'}}
    },
    color: {
      table: {defaultValue: {summary: 'primary'}}
    },
    size: {
      table: {defaultValue: {summary: 'medium'}}
    },
    disabled: {
      table: {defaultValue: {summary: 'false'}}
    },
    loading: {
      table: {defaultValue: {summary: 'false'}}
    },
    loadingIcon: {
      control: false,
      table: {defaultValue: {summary: 'ri-loader-2-line'}}
    },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:"Кнопка",
  className: ['Testtets', 'asdasdasdas']
  // className: 'Test class'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children:"Кнопка",
  icon: <Icon name={'ri-check-line'} size={18} />,
  iconPosition: 'right',
};

export const CustomLoaderIcon = Template.bind({});
CustomLoaderIcon.args = {
  children:"Кнопка",
  loadingIcon: <Icon name={'ri-calendar-line'} size={18} />,
  iconPosition: 'right',
  loading: true,
};
