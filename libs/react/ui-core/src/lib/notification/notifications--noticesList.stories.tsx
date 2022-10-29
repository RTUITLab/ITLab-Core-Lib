import { ComponentStory, ComponentMeta } from '@storybook/react';
import { noticesList } from './notifications';

export default {
  component: noticesList,
  title: 'noticesList',
} as ComponentMeta<typeof noticesList>;

const Template: ComponentStory<typeof noticesList> = (args) => (
  <noticesList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
