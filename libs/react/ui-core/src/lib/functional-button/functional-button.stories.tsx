import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FunctionalButton } from './functional-button';
import Icon from '../icon/icon'

export default {
  component: FunctionalButton,
  title: 'FunctionalButton',
  argTypes: {
    className: {control: {type: 'text'}},
    icon: {control: false},
    disabled: {table: {defaultValue: {summary: 'false'}},},
    displayIco: {table: {defaultValue: {summary: 'false'}},},
    iconPosition: {table: {defaultValue: {summary: 'left'}},},
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
  displayIco: true,
  onClick: onClick,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  displayIco: true,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  children: 'Выйти',
  displayIco: true,
  icon: <Icon name={'ri-logout-box-line'} type={'line'} />
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  children: 'Ответить',
};
