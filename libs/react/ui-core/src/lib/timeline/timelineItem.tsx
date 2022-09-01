import React, {FC} from 'react'
import styles from './timeline.module.scss'
import {TimelineItemProps} from './TimelineProps'
import {useTimelineItem} from './useTimelineItem'

export const TimelineItem:FC<TimelineItemProps> = (props) => {
  const {classes, dotClasses, timelineItemRef} = useTimelineItem(props)

  return (
    <li className={classes} ref={timelineItemRef}>
      <div className={dotClasses}></div>
      <div className={styles['timeline-item-tail']}></div>
      <div className={styles['timeline-item-content']}>
        {
          props.label &&
          <div>{props.label}</div>
        }
        {
          props.date &&
          <div>{props.date}</div>
        }
      </div>
    </li>
  )
}
