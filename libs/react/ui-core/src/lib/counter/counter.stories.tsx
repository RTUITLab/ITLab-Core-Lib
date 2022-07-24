import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Counter } from './counter';

export default {
  component: Counter,
  title: 'Counter',
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 5,
};
