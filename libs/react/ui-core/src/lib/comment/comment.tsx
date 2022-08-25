import styles from './comment.module.scss';
import {FC, forwardRef} from 'react'
import {CommentProps} from './CommentProps'
import Avatar from '../avatar/avatar';
import {FunctionalButton} from '../functional-button/functional-button'
import {useComment, UseCommentProps} from './useComment'
import Icon from '../icon/icon'
import {TextArea} from '../text-area/text-area'
import {Button} from '../button'

export const Comment = forwardRef((props: CommentProps, ref: any) => {

  const state = useComment(props)

  return (
    <div className={styles['comment-wrapper']}>
      <div ref={ref} className={styles['comment']}>
        <div className={styles['comment-avatar']}>
          {props.avatar ? props.avatar : <Avatar children={''} size={48} color={'general'} />}
        </div>
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
                <div className={styles['comment-rate-button-container']}>
                  <FunctionalButton onClick={(e) => state.handleLike(e)} className={styles['comment-rate-button']} displayIco={true}  icon={<Icon size={20} name={'ri-thumb-up-line'} type={props.rateType === 'like' ? 'fill' : 'line'} />} />
                  <span>{props.likeCount || 0}</span>
                </div>
                <div className={styles['comment-rate-button-container']}>
                  <FunctionalButton onClick={(e) => state.handleDislike(e)} className={styles['comment-rate-button']} displayIco={true}  icon={<Icon size={20} name={'ri-thumb-down-line'} type={props.rateType === 'dislike' ? 'fill' : 'line'} />} />
                  <span>{props.dislikeCount || 0}</span>
                </div>
              </>
            }
            <FunctionalButton onClick={() => state.handleReplyOpen(!state.isReplyOpen)} className={styles['comment-feedback-button']} children={'Ответить'} />
          </div>
          {state.isReplyOpen && <Reply props={props} state={state} />}
        </div>
      </div>
      {props.children}
    </div>
  )
})

const Reply:FC<ReplyType> = ({props, state}) => {
  return(
    <div className={styles['comment-reply']}>
      {props.avatar ? props.avatar : <Avatar children={''} size={48} color={'general'} />}
      <div>
        <TextArea maxLength={500} onChange={(e) => state.handleChange(e)} placeholder={'Введите текст комментария'} />
        <Button size={'medium'} color={'primary'} onClick={(e) => state.handleReply(e)}>Ответить</Button>
      </div>
    </div>
  )
}

type ReplyType = {
  props: CommentProps,
  state: UseCommentProps,
}
