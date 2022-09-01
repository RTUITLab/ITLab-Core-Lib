import styles from './timeline.module.scss';
import {TimelineProps, TimelineType} from './TimelineProps'
import {useTimeline} from './useTimeline'
import {TimelineItem} from './timelineItem'
import {forwardRef} from 'react'

export const Timeline = forwardRef<TimelineType>((props: TimelineProps) => {
  const {classes} = useTimeline(props)

  return (
    <ul className={classes}>
      {props.children}
    </ul>
  );

})
