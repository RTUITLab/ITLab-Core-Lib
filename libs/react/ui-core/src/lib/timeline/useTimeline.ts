import {TimelineProps} from './TimelineProps'
import {useMemo} from 'react'
import {getClasses} from '../../utils/getClasses'
import styles from './timeline.module.scss'

export const useTimeline = (props: TimelineProps) => {

  const classes = useMemo(() => {
    return getClasses({'timeline': true}, styles, props.className)
  }, [props.className])

  return {classes}
}
