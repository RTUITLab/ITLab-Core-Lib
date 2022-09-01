import styles from './timeline.module.scss';
import {FC} from 'react'
import {TimelineType} from './TimelineProps'
import {useTimeline} from './useTimeline'
import {TimelineItem} from './timelineItem'

export const Timeline: TimelineType = (props) => {
  const {} = useTimeline(props)

  return (
    <ul>

    </ul>
  );

}

Timeline.Item = TimelineItem;

