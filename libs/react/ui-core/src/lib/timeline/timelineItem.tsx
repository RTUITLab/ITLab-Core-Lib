import React, { forwardRef} from 'react'
import styles from './timeline.module.scss'
import {useTimelineItem} from './useTimelineItem'
import Icon from '../icon/icon'
import {TimelineItemProps} from './TimelineItemProps'

export const TimelineItem = forwardRef((props:TimelineItemProps, ref: any) => {
  const {classes, dotClasses, timelineItemRef, itemHeight, iconClasses} = useTimelineItem(props)

  return (
    <li className={classes} ref={timelineItemRef} style={props.style}>
      <div ref={ref}>
        <div className={dotClasses}>
          {props.type === 'icon' && <Icon className={iconClasses} name={'ri-arrow-up-line'} type={'line'} size={11} />}
        </div>
        <div className={styles['timeline-item-tail']} style={{height: itemHeight}}></div>
        <div className={styles['timeline-item-content']}>
          {props.children}
          {
            props.date &&
            <div>{props.date}</div>
          }
        </div>
      </div>
    </li>
  )
})
