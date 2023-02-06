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
  name: 'Кирилл',
};

export const Source = Template.bind({});
Source.args = {
  src: 'https://s0.rbk.ru/v6_top_pics/media/img/9/16/756619467602169.jpg',
};

export const InvalidSource = Template.bind({});
InvalidSource.args = {
  src: 'name prop will be used instead of invalid link',
};
