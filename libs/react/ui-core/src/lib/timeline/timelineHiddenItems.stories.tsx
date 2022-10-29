import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TimelineHiddenItems } from './timelineHiddenItems';

export default {
  component: TimelineHiddenItems,
  title: 'TimelineHiddenItems',
} as ComponentMeta<typeof TimelineHiddenItems>;

const Template: ComponentStory<typeof TimelineHiddenItems> = (args) => (
  <TimelineHiddenItems {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
