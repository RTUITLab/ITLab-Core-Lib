import styles from './comment.module.scss';
import {forwardRef} from 'react'
import {CommentProps} from './CommentProps'
import Avatar from '../avatar/avatar';
import {FunctionalButton} from '../functional-button/functional-button'
import {useComment} from './useComment'
import Icon from '../icon/icon'

export const Comment = forwardRef((props: CommentProps, ref: any) => {

  const {handleLike, handleReplyClick, handleDislike} = useComment(props)


  return (
    <div className={styles['comment-wrapper']}>
      <div ref={ref} className={styles['comment']}>
        <div className={styles['comment-avatar']}>
          {props.avatar ? props.avatar : <Avatar size={48} color={'general'} />}
        </div>
        <div className={styles['comment-content']}>
          <div className={styles['comment-author']}>{props.author}</div>
          {props.dateTime && <span className={styles['comment-datetime']}>{props.dateTime}</span>}
          <div className={styles['comment-text']}>{props.content}</div>
          <div className={styles['comment-feedback']}>
            {
              props.isRate &&
              <>
                <div className={styles['comment-rate-button']}>
                  <FunctionalButton onClick={(e) => handleLike(e)} icon={<Icon size={22} name={'ri-thumb-up-line'} type={props.rateType === 'like' ? 'fill' : 'line'} />} />
                </div>

                <div className={styles['comment-rate-button']}>
                  <FunctionalButton onClick={(e) => handleLike(e)} icon={<Icon size={22} name={'ri-thumb-down-line'} type={props.rateType === 'dislike' ? 'fill' : 'line'} />} />
                </div>
              </>
            }
          </div>
        </div>
      </div>
      {props.children}
    </div>
  )
})
