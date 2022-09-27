import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Markdown } from './markdown';
import {useState} from 'react'

export default {
  component: Markdown,
  title: 'Markdown',
  argTypes: {
    onAttachFile: { action: 'File attached!' },
    initialSection: { defaultValue: 'Writing' },
    split: { defaultValue: true },
  }
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = (args) => {
  const [value, setValue] = useState('')

  const handleChange = (e: string) => {
    setValue(e)
  }
  return(
    <Markdown {...args} onChange={handleChange} value={value} />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  height: 350
};
