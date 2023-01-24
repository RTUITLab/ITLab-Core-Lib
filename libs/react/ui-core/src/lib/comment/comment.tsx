import styles from './comment.module.scss';
import {FC, forwardRef} from 'react'
import {CommentProps} from './CommentProps'
import Avatar from '../avatar/avatar';
import {FunctionalButton} from '../functional-button/functional-button'
import {useComment} from './useComment'
import Icon from '../icon/icon'
import {TextArea} from '../text-area/text-area'
import {Button} from '../button/button'
import {UseCommentProps} from './UseCommentProps'

export const Comment = forwardRef((props: CommentProps, ref: any) => {

  const state = useComment(props)

  return (
    <div ref={ref} className={state.classes} style={props.style}>
      {props.avatar ? props.avatar : <Avatar children={''} size={48} color={'general'} />}
      <div className={styles['comment-content']}>
        <div className={styles['comment-top']}>
          <span className={styles['comment-author']}>{props.author}</span>
          {props.dateTime && <span className={styles['comment-datetime']}>{props.dateTime}</span>}
        </div>
        <p className={styles['comment-text']}>{props.content}</p>
        <div className={styles['comment-feedback']}>
          {
            props.isRate &&
            <>
              <FunctionalButton children={props.likeCount || 0} iconPosition={'left'} onClick={(e) => state.handleLike(e)} className={styles['comment-rate-button']} displayIco={true}  icon={<Icon size={20} name={'ri-thumb-up-line'} type={props.rateType === 'like' ? 'fill' : 'line'} />} />
              <FunctionalButton children={props.dislikeCount || 0} iconPosition={'left'} onClick={(e) => state.handleDislike(e)} className={styles['comment-rate-button']} displayIco={true}  icon={<Icon size={20} name={'ri-thumb-down-line'} type={props.rateType === 'dislike' ? 'fill' : 'line'} />} />
            </>
          }
          <FunctionalButton onClick={() => state.handleReplyOpen(!state.isReplyOpen)} className={styles['comment-feedback-button']} children={'Ответить'} />
        </div>
        {state.isReplyOpen && <Reply props={props} state={state} />}
        {props.children}
      </div>
    </div>
  )
})

const Reply:FC<ReplyType> = ({props, state}) => {
  return(
    <div className={styles['comment-reply']}>
      {props.avatar ? props.avatar : <Avatar children={''} size={48} color={'general'} />}
      <div ref={state.localRef} className={styles['comment-reply-content']}>
        <TextArea defaultValue={state.replyValue} autoFocus maxLength={500} onChange={(e) => state.handleChange(e)} style={{marginBottom: 5}} placeholder={'Введите текст комментария'} />
        <Button size={'medium'} color={'primary'} onClick={(e) => state.handleReply(e)}>Ответить</Button>
      </div>
    </div>
  )
}

type ReplyType = {
  props: CommentProps,
  state: UseCommentProps,
}
