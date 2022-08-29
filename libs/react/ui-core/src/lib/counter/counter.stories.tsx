import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Counter} from "./counter";

export default {
  component: Counter,
  title: 'Counter',
  argTypes: {
    className: {control: {type: 'text'}},
    type: {control: "select", options: ["solid", "outline", "light"], table: {defaultValue: {summary: 'outline'}}},
    color: {control: "select", options: ["primary", "red", "green", "orange", "transparent"], table: {defaultValue: {summary: 'primary'}}},
    size: {control: "select", options: ["small", "medium", "large"], table: {defaultValue: {summary: 'medium'}}},
  }
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 5,
  overflowCount: 99,
};
