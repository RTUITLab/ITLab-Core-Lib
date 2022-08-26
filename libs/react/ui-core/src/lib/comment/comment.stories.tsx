import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Comment } from './comment';
import Avatar from '../avatar/avatar'
import React, {useState} from 'react'

export default {
  component: Comment,
  title: 'Comment',
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => {
  const [rateType, setRateType] = useState<'' | 'like' | 'dislike'>('')

  const onReply = (e: React.MouseEvent<HTMLElement>, content: string) => {
    window.alert(content)
  }
  const onDislike = (e: React.MouseEvent<HTMLElement>) => {
    setRateType('dislike')
  }
  const onLike = (e: React.MouseEvent<HTMLElement>) => {
    setRateType('like')
  }

  return (<Comment {...args} likeCount={rateType === 'like' ? 11 : 10} dislikeCount={rateType === 'dislike' ? 11 : 10} rateType={(rateType === 'like' || rateType === 'dislike') ? rateType : undefined} onReply={onReply} onDislike={onDislike} onLike={onLike}/>)
}

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
  isRate: true,
};

export const NotRate = Template.bind({});
NotRate.args = {
  avatar: <Avatar children={'КП'} size={48} color={'general'} />,
  author: 'Автор name',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu integer pharetra suspendisse in nibh viverra faucibus. Laoreet aliquam ornare sit eu fusce fames risus. Sem curabitur semper et in vestibulum risus vitae consectetur turpis. Nisi, malesuada aliquet sit ut.',
  dateTime: '25.08.2022',
  commentId: '123',
  isRate: false,
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
