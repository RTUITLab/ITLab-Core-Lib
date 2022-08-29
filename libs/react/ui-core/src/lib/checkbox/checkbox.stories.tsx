import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './checkbox';
import Icon from '../icon/icon'

export default {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    checkboxIcon: { control: false},
    className: { control: 'text'},
    isRequired: {table: {defaultValue: {summary: 'false'}},},
    readonly: {table: {defaultValue: {summary: 'false'}},},
    disabled: {table: {defaultValue: {summary: 'false'}},},
    defaultChecked: {table: {defaultValue: {summary: 'false'}},},
    error: {table: {defaultValue: {summary: 'false'}},},
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Нажми на меня',
};
export const CustomIcon = Template.bind({});
CustomIcon.args = {
  label: 'Нажми на меня',
  checkboxIcon: <Icon name={'ri-calendar-line'} type={'line'} size={16} />
};
