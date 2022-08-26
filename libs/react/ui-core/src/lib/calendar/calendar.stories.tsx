import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calendar } from './calendar';

export default {
  component: Calendar,
  title: 'Calendar',
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} setCurrentMonth={() => new Date()} currentMonth={new Date()} selectedDate={new Date()} onSelectDate={()=>{}} />
);

export const Primary = Template.bind({});
Primary.args = {};
