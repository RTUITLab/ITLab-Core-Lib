import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './input';
import React from 'react'
import Icon from '../icon/icon'

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    icon: { control: false },
    defaultValue: { control: {type: 'text'}},
    type: { control: {type: 'select', options: ['text', 'email', 'password', 'search', 'tel', 'date']}},
    value: { control: {type: 'text'}},
    max: { control: {type: 'text'}},
    min: { control: {type: 'text'}},
    className: { control: {type: 'text'}},
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />
};

const CalendarTemplate: ComponentStory<typeof Input> = (args) => {
  return (
    <>
      <Input {...args} />
    </>
  )
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Write some text',
  size: 'medium',
  type: 'text',
  iconPosition: 'right',
  errorText: 'Ошибка!!!',
};


export const Search = Template.bind({});
Search.args = {
  placeholder: 'Поиск...',
  size: 'medium',
  type: 'search',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  placeholder: 'Write some text',
  size: 'medium',
  type: 'text',
  iconPosition: 'right',
  errorText: 'Ошибка!!!',
  icon: <Icon name={'ri-flag-line'} size={24} />
};

export const DatePicker = CalendarTemplate.bind({});
DatePicker.args = {
  size: 'medium',
  type: 'date',
  iconPosition: 'left',
  errorText: 'Ошибка!!!',
  style:{maxWidth: 194}
};

export const SmallDatePicker = CalendarTemplate.bind({});
SmallDatePicker.args = {
  size: 'medium',
  type: 'date',
  iconPosition: 'left',
  calendarSize: 'small',
  errorText: 'Ошибка!!!',
  style:{maxWidth: 194}
};
