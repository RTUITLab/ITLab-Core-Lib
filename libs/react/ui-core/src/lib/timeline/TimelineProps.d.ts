import React from 'react'
import {TimelineItem} from './timelineItem'
import {DefaultParams} from '../../default-types/defaultParams'

export interface TimelineItemProps extends DefaultParams {
  type?: 'default' | 'success' | 'error' | 'icon'
  date?: string
  children?: string | React.ReactNode
}

export interface TimelineProps extends DefaultParams {

  /** The items to display in the timeline
   *
   * TimelineItem {<br/>
   *   &nbsp;&nbsp;date?: string;<br/>
   *   &nbsp;&nbsp;children?: React.ReactNode | string;<br/>
   *   &nbsp;&nbsp;type?: 'default' | 'success' | 'error';<br/>
   * }
   */
  children?: React.ReactNode<TimelineItem>
}
