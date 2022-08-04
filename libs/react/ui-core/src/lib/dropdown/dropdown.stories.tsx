import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './dropdown';

export default {
  component: Dropdown,
  title: 'Dropdown',
  argTypes: {
    icon: { control: false },
    defaultSelectedKey: { control: {type: 'text'}},
    className: { control: {type: 'text'}},
    itemClass: { control: {type: 'text'}},
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
  ]
};
