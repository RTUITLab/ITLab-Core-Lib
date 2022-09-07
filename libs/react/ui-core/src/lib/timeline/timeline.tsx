import {TimelineProps} from './TimelineProps'
import {useTimeline} from './useTimeline'
import {forwardRef} from 'react'

export const Timeline = forwardRef((props: TimelineProps, ref: any) => {
  const {classes} = useTimeline(props)

  return (
    <ul className={classes} style={props.style} ref={ref}>
      {props.children}
    </ul>
  );

})
