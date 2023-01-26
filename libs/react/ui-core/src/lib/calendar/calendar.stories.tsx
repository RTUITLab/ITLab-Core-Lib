import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Calendar} from './calendar'

export default {
  component: Calendar,
  title: 'Calendar',
} as ComponentMeta<typeof Calendar>

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  type: 'date'
}

export const SmallCalendar = Template.bind({})
SmallCalendar.args = {
  type: 'date',
  size: 'small',
}
