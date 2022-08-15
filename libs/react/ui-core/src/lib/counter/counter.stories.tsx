import {ComponentMeta, ComponentStory} from '@storybook/react';
import Counter from "./counter";

export default {
  component: Counter,
  title: 'Counter',
  argTypes: {
    style: {control: false},
    className: {control: false},
    type: {control: "select", options: ["solid", "outline", "light"]},
    color: {control: "select", options: ["primary", "red", "green", "transparent"]},
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
  color: 'primary',
  size: 'large',
};
