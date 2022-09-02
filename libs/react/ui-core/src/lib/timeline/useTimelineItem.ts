import {TimelineItemProps} from './TimelineProps'
import styles from './timeline.module.scss'
import {createRef, useEffect, useMemo, useState} from 'react'
import {getClasses} from '../../utils/getClasses'

export const useTimelineItem = (props:TimelineItemProps) => {
  const [itemHeight, setItemHeight] = useState<number>(0)
  const timelineItemRef = createRef<HTMLLIElement>()

  useEffect(() => {
    if(timelineItemRef.current) {
      setItemHeight( timelineItemRef.current.clientHeight - 10)
    }
  }, [timelineItemRef.current])

  const classes = useMemo(() => {
    return getClasses({'timeline-item': true}, styles, props.className)
  }, [props.className])

  const dotClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "timeline-item-dot": true,
      "timeline-item-dot-primary": props.type === 'default' || !props.type,
      "timeline-item-dot-red": props.type === 'error',
      "timeline-item-dot-green": props.type === 'success',
      "timeline-item-dot-icon": props.type === 'icon',
    };
    return getClasses(conditions, styles)
  }, [props.type]);

  return {classes, dotClasses, timelineItemRef, itemHeight}
}
