import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Calendar} from './calendar'
import {Input} from '../input/input'
import {InputProps} from '../input/InputProps'

export default {
  component: Calendar,
  title: 'Calendar',
} as ComponentMeta<typeof Calendar>

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
)

const InputTemplate: ComponentStory<typeof Input> = (args: InputProps) => {

  const handleChange = (e: any) => {
    console.log(e)
  }

  return (
    <Input {...args} onSelectDate={handleChange} />
  )

}

export const Primary = Template.bind({})
Primary.args = {
  type: 'date'
}

export const SmallCalendar = Template.bind({})
SmallCalendar.args = {
  type: 'date',
  size: 'small',
}
export const DefaultValue = InputTemplate.bind({})
DefaultValue.args = {
  type: 'date',
  size: 'small',
  defaultValue: '04.01.2023',
  style:{maxWidth: 194}
}

export const RangePicker = InputTemplate.bind({})
RangePicker.args = {
  size: 'medium',
  type: 'dateRange',
  placeholder: '04.01.2023 — 28.01.2023',
  iconPosition: 'left',
  errorText: 'Ошибка!!!',
}

export const RangePickerDefaultValue = InputTemplate.bind({})
RangePickerDefaultValue.args = {
  size: 'medium',
  type: 'dateRange',
  placeholder: '01.01.2023 — 28.01.2023',
  iconPosition: 'left',
  errorText: 'Ошибка!!!',
  defaultValue: '04.01.2023 — 28.01.2023',
}
