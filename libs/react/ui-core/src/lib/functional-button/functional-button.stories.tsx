import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FunctionalButton } from './functional-button';
import Icon from '../icon/icon'

export default {
  component: FunctionalButton,
  title: 'FunctionalButton',
  argTypes: {
    className: {control: {type: 'text'}},
    icon: {control: false}
  }
} as ComponentMeta<typeof FunctionalButton>;

const Template: ComponentStory<typeof FunctionalButton> = (args) => (
  <FunctionalButton {...args} />
);

export const Primary = Template.bind({});
const onClick = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e.target)
}
Primary.args = {
  children: 'Нажми меня',
  onClick: onClick,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  children: 'Выйти',
  icon: <Icon name={'ri-logout-box-line'} type={'line'} />
};
