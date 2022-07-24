import styles from './counter.module.scss';
import {ReactNode} from "react";

/* eslint-disable-next-line */
export interface CounterProps {
  children:ReactNode | number;
  type:"solid" | "outline" | "light";
  color:"primary"|"red"|"green";
  size:"small"|"medium"|"large";
}

export function Counter(props: CounterProps) {
  return (
    <span className={styles['counter']}>{props.children}</span>
  );
}

export default Counter;
