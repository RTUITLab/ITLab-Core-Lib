import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './badge';

export default {
  component: Badge,
  title: 'Badge',
  argTypes: {
    style: { control: false },
    className: { control: false },
    type: { control: 'select', options: ['solid', 'outline', 'light'] },
    color: {
      control: 'select',
      options: ['primary', 'red', 'green', 'orange', 'transparent'],
    },
    shape: { control: 'select', options: ['rectangular', 'circle'] },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Badge',
  type: 'outline',
  color: 'primary',
  shape: 'rectangular',
};
