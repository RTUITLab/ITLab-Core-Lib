import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Badge} from './badge';

export default {
  component: Badge,
  title: 'Badge',
  argTypes: {
    className: { control: 'text' },
    type: { control: 'radio', options: ['solid', 'outline', 'light'], table: {defaultValue: {summary: 'outline'}}, },
    color: {
      control: 'select',
      options: ['primary', 'red', 'green', 'orange', 'transparent'],
      table: {defaultValue: {summary: 'primary'}},
    },
    shape: { control: 'radio', options: ['rectangular', 'circle'], table: {defaultValue: {summary: 'rectangular'}}, },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Badge',
};
