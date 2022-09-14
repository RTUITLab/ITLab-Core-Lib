import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from './switch';

export default {
  component: Switch,
  title: 'Switch',
  argTypes: {
    className: {control: {type: 'text'}},
    labelClassName: {control: {type: 'text'}},
    disabled: {table: { defaultValue: {summary: 'false'}}},
    defaultChecked: {table: { defaultValue: {summary: 'false'}}},
    size: {table: { defaultValue: {summary: 'medium'}}, control: {type: 'radio', options: ['small', 'medium']}},
    labelPosition: {table: { defaultValue: {summary: 'left'}}},
    onChange: {action: 'Switch toggled'}
  }
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const handleChange = (checked: boolean) => {
    console.log(checked)
  }

  return (
      <Switch {...args} onChange={handleChange} />
    )
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Лайбел'
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
};
export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
