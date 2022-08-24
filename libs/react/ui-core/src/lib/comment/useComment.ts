import React, {useState} from 'react'
import {CommentProps} from './CommentProps'

export const useComment = (props: CommentProps) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false)

  const handleReplyClick = (openReply: boolean) => {
    setIsReplyOpen(openReply)
  }

  const handleLike = (e: React.MouseEvent<HTMLElement>) => {
    if(props.onLike) props.onLike(e, props.commentId)
  }

  const handleDislike = (e: React.MouseEvent<HTMLElement>) => {
    if(props.onDislike) props.onDislike(e, props.commentId)
  }

  return {isReplyOpen, handleDislike, handleLike, handleReplyClick}
}
