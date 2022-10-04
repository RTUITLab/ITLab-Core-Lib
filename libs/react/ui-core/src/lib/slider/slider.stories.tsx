import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from './slider';
import {useState} from 'react'

export default {
  component: Slider,
  title: 'Slider',
  argTypes: {
    className: { control: {type: 'text'}},
    dotClassName: { control: {type: 'text'}},
    trackClassName: { control: {type: 'text'}},
    defaultValue: {control: false},
    onChange: {action: 'Changed'}
  }
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  const [values, setValues] = useState<[number] | [number, number]>([5]);
  const handleChange = (values: [number] | [number, number]) => {
    setValues(values)
  }
  return (
    <Slider {...args} style={{margin:50}} defaultValue={values} onChange={handleChange} />
    )
};
const RangeTemplate: ComponentStory<typeof Slider> = (args) => {
  const [values, setValues] = useState<[number] | [number, number]>([5, 10]);
  return (
    <Slider {...args} style={{margin:50}} defaultValue={values} onChange={setValues} />
    )
};

export const Primary = Template.bind({});
Primary.args = {
  min: -10,
  max: 20,
};

export const WithInputNumber = Template.bind({});
WithInputNumber.args = {
  min: -10,
  max: 20,
  showInput: true,
};

export const Range = RangeTemplate.bind({});
Range.args = {
};
