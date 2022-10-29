import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TimelineItem } from './timelineItem';

export default {
  component: TimelineItem,
  title: 'TimelineItem',
} as ComponentMeta<typeof TimelineItem>;

const Template: ComponentStory<typeof TimelineItem> = (args) => (
  <TimelineItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
