import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from './slider';
import {useState} from 'react'

export default {
  component: Slider,
  title: 'Slider',
  argTypes: {
    className: { control: {type: 'text'}},
  }
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  const [values, setValues] = useState<[number] | [number, number]>([5]);
  return (
    <Slider {...args} defaultValue={values} onChange={setValues} />
    )
};
const RangeTemplate: ComponentStory<typeof Slider> = (args) => {
  const [values, setValues] = useState<[number] | [number, number]>([5, 10]);
  return (
    <Slider {...args} defaultValue={values} onChange={setValues} />
    )
};

export const Primary = Template.bind({});
Primary.args = {
};

export const Range = RangeTemplate.bind({});
Range.args = {
};
