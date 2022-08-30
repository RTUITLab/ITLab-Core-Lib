import React from 'react'

export interface UseCommentProps {
  isReplyOpen: boolean
  handleDislike: (e: React.MouseEvent<HTMLElement>) => void
  handleLike: (e: React.MouseEvent<HTMLElement>) => void
  handleReplyOpen: (openReply: boolean) => void
  handleReply: (e: React.MouseEvent<HTMLElement>) => void
  replyValue: string
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  classes: string
  localRef: any
}
