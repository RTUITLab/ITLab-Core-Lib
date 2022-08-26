import React, {createRef, useEffect, useMemo, useRef, useState} from 'react'
import {CommentProps} from './CommentProps'
import styles from './comment.module.scss'

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

export const useComment = (props: CommentProps): UseCommentProps => {
  const [isReplyOpen, setIsReplyOpen] = useState<boolean>(false)
  const [replyValue, setReplyValue] = useState<string>('')
  const localRef = createRef<HTMLDivElement>();

  const handleReplyOpen = (openReply: boolean) => {
    setIsReplyOpen(openReply)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyValue(e.target.value)
  }

  const handleReply = (e: React.MouseEvent<HTMLElement>) => {
    if(props.onReply && replyValue.length > 0) {
      props.onReply(e, replyValue)
      handleReplyOpen(false)
      setReplyValue('')
    }
  }

  const handleLike = (e: React.MouseEvent<HTMLElement>) => {
    if(props.onLike) props.onLike(e, props.commentId)
  }

  const handleDislike = (e: React.MouseEvent<HTMLElement>) => {
    if(props.onDislike) props.onDislike(e, props.commentId)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (event: any) => {
    if(isReplyOpen && localRef.current && !localRef.current.contains(event.target)) {
      handleReplyOpen(false)
    }
  }

  const classes = useMemo(() => {
    const classList = [styles['comment']];

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props]);

  return {classes, isReplyOpen, handleDislike, handleLike, handleReply, handleReplyOpen, replyValue, handleChange, localRef}
}
