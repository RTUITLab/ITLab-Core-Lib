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
    type: { control: {type: 'select', options: ['text', 'number', 'email', 'password', 'search', 'tel']}},
    value: { control: {type: 'text'}},
    max: { control: {type: 'text'}},
    min: { control: {type: 'text'}},
    className: { control: {type: 'text'}},
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Write some text',
  size: 'medium',
  type: 'text',
  iconPosition: 'right',
  readonly: true,
  errorText: 'Ошибка!!!',
  icon: <Icon name={'ri-flag-line'} size={24} />
};

export const Search = Template.bind({});
Search.args = {
  placeholder: 'Поиск...',
  size: 'medium',
  type: 'search',
};
