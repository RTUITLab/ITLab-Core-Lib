import React, {forwardRef} from 'react'
import styles from './timeline.module.scss'
import {TimelineItem} from './timelineItem'
import {FunctionalButton} from '../functional-button/functional-button'
import {UseTimelineHiddenItems} from './useTimelineHiddenItems'
import {TimelineHiddenProps} from './TimelineHiddenProps'

export const TimelineHiddenItems = forwardRef(({openText = 'Показать предыдущние', closeText = 'Скрыть предыдущие', ...props}: TimelineHiddenProps, ref: any) => {
  const {
    contentRef,
    contentDisplay,
    contentHeight,
    toggleExpanded,
    expanded,
  } = UseTimelineHiddenItems();

  return (
    <div ref={ref} className={styles['timeline-hidden']}>
      <TimelineItem active={expanded} type={'icon'}>
        <FunctionalButton className={styles['timeline-button']} onClick={toggleExpanded}>
          {!expanded ? openText : closeText}
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
