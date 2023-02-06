import {forwardRef} from "react";
import {useCounter} from "./useCounter";
import {getAllEvents} from "../../utils/getAllEvents";
import {CounterProps} from "./CounterProps";
import {Badge} from '../badge/badge'

export const Counter = forwardRef((props:CounterProps, ref:any) => {
  const {style, classes, count} = useCounter(props);

  return (
    <Badge {...getAllEvents(props)} className={classes} ref={ref} style={style} shape={'circle'} type={props.type} color={props.color}>
      {count}
    </Badge>
  );
})
