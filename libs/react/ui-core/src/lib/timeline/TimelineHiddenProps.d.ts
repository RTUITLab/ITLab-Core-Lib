import React from 'react'
import {TimelineItem} from './timelineItem'

export interface TimelineHiddenProps {

  /** Text displayed when timeline items are visible */
  closeText?: string

  /** Text displayed when timeline items are hidden */
  openText?: string

  /** The items to display in the timeline
   *
   * TimelineItem {<br/>
   *   &nbsp;&nbsp;date?: string;<br/>
   *   &nbsp;&nbsp;children?: React.ReactNode | string;<br/>
   *   &nbsp;&nbsp;type?: 'default' | 'success' | 'error';<br/>
   *   &nbsp;&nbsp;active?: boolean;<br/>
   *   &nbsp;&nbsp;style?: CSSProperties;
   *   &nbsp;&nbsp;className?: string | string[];
   * }
   */
  children?: React.ReactNode<TimelineItem>
}
