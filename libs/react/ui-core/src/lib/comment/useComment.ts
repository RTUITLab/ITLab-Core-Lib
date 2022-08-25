import React, {useState} from 'react'
import {CommentProps} from './CommentProps'

export interface UseCommentProps {
  isReplyOpen: boolean
  handleDislike: (e: React.MouseEvent<HTMLElement>) => void
  handleLike: (e: React.MouseEvent<HTMLElement>) => void
  handleReplyOpen: (openReply: boolean) => void
  handleReply: (e: React.MouseEvent<HTMLElement>) => void
  replyValue: string
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const useComment = (props: CommentProps): UseCommentProps => {
  const [isReplyOpen, setIsReplyOpen] = useState<boolean>(false)
  const [replyValue, setReplyValue] = useState<string>('')

  const handleReplyOpen = (openReply: boolean) => {
    setIsReplyOpen(openReply)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyValue(e.target.value)
  }

  const handleReply = (e: React.MouseEvent<HTMLElement>) => {
    if(props.onReply) props.onReply(e, replyValue)
  }

  const handleLike = (e: React.MouseEvent<HTMLElement>) => {
    if(props.onLike) props.onLike(e, props.commentId)
  }

  const handleDislike = (e: React.MouseEvent<HTMLElement>) => {
    if(props.onDislike) props.onDislike(e, props.commentId)
  }

  return {isReplyOpen, handleDislike, handleLike, handleReply, handleReplyOpen, replyValue, handleChange}
}
