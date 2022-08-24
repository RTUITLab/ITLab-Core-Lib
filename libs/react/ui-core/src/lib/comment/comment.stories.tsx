import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Comment } from './comment';

export default {
  component: Comment,
  title: 'Comment',
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => (
  <Comment {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
