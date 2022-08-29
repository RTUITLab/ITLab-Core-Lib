import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Avatar} from './avatar';

export default {
  component: Avatar,
  title: 'Avatar',
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      table: {defaultValue: {summary: 96}}
    },
    color: {
      table: {defaultValue: {summary: 'primary'}}
    },
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'БК',
};
