import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './radio';
import React, {useState} from 'react'
import {RadioGroup} from '../radio-group/radio-group'

export default {
  component: Radio,
  title: 'Radio',
  argTypes: {
    label: {control: false},
    value: {control: false},
    className: {control: {type: 'text'}},
    labelStyleClass: {control: {type: 'text'}},
  }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const[checkedValue, setCheckedValue] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(e.target.value)
  }
  return(
      <RadioGroup onChange={handleChange} value={checkedValue}>
        <Radio {...args} style={{marginBottom: 10}} value={'example'} label={'item 1'} />
        <Radio {...args} value={'test'} label={'item 2'} />
      </RadioGroup>
    )
};

export const Primary = Template.bind({});
Primary.args = {};
