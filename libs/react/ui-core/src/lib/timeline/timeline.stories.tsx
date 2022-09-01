import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Timeline } from './timeline';

export default {
  component: Timeline,
  title: 'Timeline',
  argTypes: {
    className: { control: 'text' },
  }
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args}>
    <Timeline.Item />
  </Timeline>
);

export const Primary = Template.bind({});
Primary.args = {};
