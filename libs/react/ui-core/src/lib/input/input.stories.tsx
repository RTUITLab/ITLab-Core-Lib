import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './input';
import React from 'react'
import Icon from '../icon/icon'

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    icon: { control: false },
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Write some text',
  autoFocus: true,
  iconPosition: 'right',
  size: 'large',
  icon: <Icon size={24} name={"user-search"} color={'general'} />
};
