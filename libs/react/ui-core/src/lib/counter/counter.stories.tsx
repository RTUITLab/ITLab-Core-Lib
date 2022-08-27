import {ComponentMeta, ComponentStory} from '@storybook/react';
import Counter from "./counter";

export default {
  component: Counter,
  title: 'Counter',
  argTypes: {
    className: {control: {type: 'text'}},
    type: {control: "select", options: ["solid", "outline", "light"]},
    color: {control: "select", options: ["primary", "red", "green", "orange", "transparent"]},
    size: {control: "select", options: ["small", "medium", "large"]},
  }
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 5,
  type: 'outline',
  size: 'large',
  color: 'primary',
  overflowCount: 99,
};
