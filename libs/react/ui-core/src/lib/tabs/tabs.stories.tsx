import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './tabs';

export default {
  component: Tabs,
  title: 'Tabs',
  argTypes: {
    className: { control: {type: 'text'}},
    itemStyleClass: { control: {type: 'text'}},
    defaultActiveItem: { control: {type: 'text'}},
  }
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  defaultActiveItem: 'key5',
  items: [
    {label: 'События', key: 'key1'},
    {label: 'Проекты', key: 'key2'},
    {label: 'Покупки', key: 'key3', badge: 66},
    {label: 'Отчеты', key: 'key4', badge: 1},
    {label: 'Сводка', key: 'key5', badge: 100}
  ]
};
