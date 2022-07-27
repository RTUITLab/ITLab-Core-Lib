import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Counter } from './counter';

export default {
  component: Counter,
  title: 'Counter',
  argTypes:{
    style:{control:false},
    className:{control:false},
  }
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 5,
  type: 'outline',
  color: 'primary',
  size: 'large',
};
