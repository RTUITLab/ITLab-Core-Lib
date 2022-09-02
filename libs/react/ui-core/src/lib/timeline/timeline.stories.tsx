import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Timeline } from './timeline';
import {TimelineItem} from './timelineItem'
import {TimelineHiddenItems} from './timelineHiddenItems'

export default {
  component: Timeline,
  title: 'Timeline',
  argTypes: {
    className: { control: 'text' },
  }
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args}>
    <TimelineHiddenItems openText={'Показать предыдущие'}>
      <TimelineItem date={'01.09.2022'} type={'default'}>String 1</TimelineItem>
      <TimelineItem date={'01.09.2022'} type={'success'}>string2</TimelineItem>
    </TimelineHiddenItems>
    <TimelineItem date={'01.09.2022'} type={'error'}>string 3</TimelineItem>
    <TimelineItem date={'01.09.2022'} type={'default'}>
      <p>Куку</p>
      <p>Привет</p>
      <p>Привет</p>
    </TimelineItem>
  </Timeline>
);

export const Primary = Template.bind({});
Primary.args = {};
