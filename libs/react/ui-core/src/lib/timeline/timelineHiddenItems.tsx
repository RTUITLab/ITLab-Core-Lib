import React, {forwardRef} from 'react'
import styles from './timeline.module.scss'
import {useCollapseItem} from '../collapse/useCollapseItem'
import {TimelineItem} from './timelineItem'
import {FunctionalButton} from '../functional-button/functional-button'

export const TimelineHiddenItems = forwardRef((props: any, ref: any) => {
  const {
    contentRef,
    contentDisplay,
    contentHeight,
    toggleExpanded,
  } = useCollapseItem(props);

  return (
    <div className={styles['timeline-hidden']}>
      <TimelineItem type={'icon'}>
        <FunctionalButton onClick={toggleExpanded}>
          {props.openText}
        </FunctionalButton>
      </TimelineItem>
      <div ref={contentRef}
           style={{
             display: contentDisplay,
             transition: 'height 150ms',
             overflow: 'hidden',
             height: contentHeight.toString() + 'px',
           }}
      >
        {props.children}
      </div>
    </div>
  )
})
