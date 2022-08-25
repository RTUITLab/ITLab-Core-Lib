import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Comment } from './comment';
import Avatar from '../avatar/avatar'

export default {
  component: Comment,
  title: 'Comment',
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => (
  <Comment {...args} />
);

const Nested: ComponentStory<typeof Comment> = (args) => (
  <Comment {...args} >
    <Comment {...args} rateType={'like'}>
      <Comment {...args} rateType={'dislike'}></Comment>
    </Comment>
    <Comment {...args} ></Comment>
  </Comment>
);

export const Primary = Template.bind({});
Primary.args = {
  avatar: <Avatar children={'КП'} size={48} color={'general'} />,
  author: 'Автор name',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu integer pharetra suspendisse in nibh viverra faucibus. Laoreet aliquam ornare sit eu fusce fames risus. Sem curabitur semper et in vestibulum risus vitae consectetur turpis. Nisi, malesuada aliquet sit ut.',
  dateTime: '25.08.2022',
  commentId: '123',
  likeCount: 10,
  dislikeCount: 5,
  isRate: true,
};

export const NestedComments = Nested.bind({});
NestedComments.args = {
  author: 'Автор name',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu integer pharetra suspendisse in nibh viverra faucibus. Laoreet aliquam ornare sit eu fusce fames risus. Sem curabitur semper et in vestibulum risus vitae consectetur turpis. Nisi, malesuada aliquet sit ut.',
  dateTime: '25.08.2022',
  commentId: '123',
  likeCount: 10,
  dislikeCount: 5,
  isRate: true,
};
