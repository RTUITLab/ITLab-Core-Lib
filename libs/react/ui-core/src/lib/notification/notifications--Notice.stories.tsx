import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notice } from './notifications';

export default {
  component: Notice,
  title: 'Notice',
} as ComponentMeta<typeof Notice>;

const Template: ComponentStory<typeof Notice> = (args) => <Notice {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
