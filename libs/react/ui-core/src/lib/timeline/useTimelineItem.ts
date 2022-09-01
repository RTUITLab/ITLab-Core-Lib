import {TimelineItemProps} from './TimelineProps'
import styles from './timeline.module.scss'
import {createRef, useMemo} from 'react'
import {getClasses} from '../../utils/getClasses'

export const useTimelineItem = (props:TimelineItemProps) => {

  const timelineItemRef = createRef<HTMLLIElement>()

  const classes = useMemo(() => {
    return getClasses({'timeline-item': true}, styles, props.className)
  }, [props.className])

  const dotClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "timeline-item-dot": true,
      "timeline-item-dot-primary": props.type === 'default' || !props.type,
      "timeline-item-dot-red": props.type === 'error',
      "timeline-item-dot-green": props.type === 'success',
    };
    return getClasses(conditions, styles)
  }, [props.type]);

  return {classes, dotClasses, timelineItemRef}
}
