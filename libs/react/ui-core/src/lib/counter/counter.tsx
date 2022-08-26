import {forwardRef} from "react";
import {useCounter} from "./useCounter";
import {getAllEvents} from "../../utils/getAllEvents";
import {CounterProps} from "./CounterProps";

const Counter = forwardRef((props:CounterProps, ref:any) => {
  const {style, classes, count} = useCounter(props);

  return (
    <span {...getAllEvents(props)} ref={ref} title={"" || props.text} style={style} className={classes}>{count}</span>
  );
})

export default Counter;
