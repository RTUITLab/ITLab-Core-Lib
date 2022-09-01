import React, {FC} from 'react'
import {TimelineItemProps} from './TimelineProps'
import {useTimelineItem} from './useTimelineItem'

export const TimelineItem:FC<TimelineItemProps> = (props) => {
  const {} = useTimelineItem(props)

  return (
    <li>

    </li>
  )
}
