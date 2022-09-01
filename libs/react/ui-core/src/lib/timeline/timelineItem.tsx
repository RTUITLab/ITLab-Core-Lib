import React, { forwardRef} from 'react'
import styles from './timeline.module.scss'
import {TimelineItemProps} from './TimelineProps'
import {useTimelineItem} from './useTimelineItem'

export const TimelineItem = forwardRef((props:TimelineItemProps, ref: any) => {
  const {classes, dotClasses, timelineItemRef, itemHeight} = useTimelineItem(props)
  console.log(itemHeight)

  return (
    <li className={classes} ref={timelineItemRef}>
      <div className={dotClasses}></div>
      <div className={styles['timeline-item-tail']} style={{height: itemHeight}}></div>
      <div className={styles['timeline-item-content']}>
        {props.children}
        {
          props.date &&
          <div>{props.date}</div>
        }
      </div>
    </li>
  )
})
