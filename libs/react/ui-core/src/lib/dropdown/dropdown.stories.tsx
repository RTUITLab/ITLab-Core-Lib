import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './dropdown';
import React from 'react'
import Icon from '../icon/icon'

export default {
  component: Dropdown,
  title: 'Dropdown',
  argTypes: {
    icon: { control: false },
    defaultSelectedKey: { control: {type: 'text'}},
    className: { control: {type: 'text'}},
    itemClass: { control: {type: 'text'}},
    size: {table: {defaultValue: {summary: 'medium'}},},
    disabled: {table: {defaultValue: {summary: 'false'}},},
    defaultOpen: {table: {defaultValue: {summary: 'false'}},},
    error: {table: {defaultValue: {summary: 'false'}},},
  }
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {label: 'Вариант 01', key: 'key 1'},
    {label: 'Вариант 02', key: 'key 2'},
    {label: 'Вариант 03', key: 'key 3', disabled: true},
    {label: 'Вариант 04', key: 'key 4'},
  ],
  icon: <Icon size={24} name={"ri-calendar-event-line"} />
};
