import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioGroup } from './radio-group';
import {Radio} from '../radio/radio'
import React, {useState} from 'react'

export default {
  component: RadioGroup,
  title: 'RadioGroup',
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  const[checkedValue, setCheckedValue] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(e.target.value)
  }
  return(
    <RadioGroup {...args} onChange={handleChange} value={checkedValue}>
      <Radio style={{marginBottom: 10}} value={'example'} label={'item 1'} />
      <Radio value={'test'} label={'item 2'} />
    </RadioGroup>
  )
};

const EmptyTemplate: ComponentStory<typeof RadioGroup> = (args) => {
  const[checkedValue, setCheckedValue] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(e.target.value)
  }
  return(
    <RadioGroup {...args} onChange={handleChange} value={checkedValue}>
      <Radio style={{marginBottom: 10}} value={'Privet'} label={'item 1'} />
      <Radio value={'Test privet'} label={'item 2'} />
    </RadioGroup>
  )
};

export const Primary = Template.bind({});
Primary.args = {};

export const Readonly = EmptyTemplate.bind({});
Readonly.args = {
  readonly: true
};

export const Disabled = EmptyTemplate.bind({});
Disabled.args = {
  disabled: true
};
