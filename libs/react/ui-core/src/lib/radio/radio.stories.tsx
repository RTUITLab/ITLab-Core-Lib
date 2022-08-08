import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './radio';
import React, {useState} from 'react'

export default {
  component: Radio,
  title: 'Radio',
  argTypes: {
    radioIcon: { control: false },
    label: { control: false },
    checked: { control: false },
    value: { control: false},
    className: { control: {type: 'text'}},
    labelStyleClass: { control: {type: 'text'}},
  }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
  const[checkedValue, setCheckedValue] = useState<string>()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(e.target.value)
  }
  return(
    <>
      <Radio {...args} style={{marginBottom: 10}} onChange={handleChange} value={'example'} checked={checkedValue === 'example'} label={'item 1'} />
      <Radio {...args} onChange={handleChange} value={'test'} checked={checkedValue === 'test'} label={'item 2'} />
    </>
    )
};

export const Primary = Template.bind({});
Primary.args = {};
