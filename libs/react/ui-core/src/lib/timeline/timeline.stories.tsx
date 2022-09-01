import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Timeline } from './timeline';
import {TimelineItem} from './timelineItem'

export default {
  component: Timeline,
  title: 'Timeline',
  argTypes: {
    className: { control: 'text' },
  }
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args}>
    <TimelineItem label={'String'} date={'01.09.2022'} type={'default'} />
    <TimelineItem label={'string 2'} date={'01.09.2022'} type={'success'} />
    <TimelineItem label={'string 3'} date={'01.09.2022'} type={'error'} />
  </Timeline>
);

export const Primary = Template.bind({});
Primary.args = {};
