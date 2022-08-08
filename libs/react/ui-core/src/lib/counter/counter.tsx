import styles from './counter.module.scss';
import {forwardRef, ReactNode, useMemo} from "react";
import {DefaultParams} from "../../default-types/defaultParams";
import {useCounter} from "./useCounter";
import {ClickableObjectMini} from "../../default-types/ClickableObjectMini";
import {getAllEvents} from "../../utils/getAllEvents";
import {CounterProps} from "./CounterProps";

const Counter = forwardRef((props:CounterProps, ref:any) => {
  const {style, classes, count} = useCounter(props);

  return (
    <span {...getAllEvents(props)} ref={ref} title={"" || props.text} style={style} className={classes}>{count}</span>
  );
})

export default Counter;
