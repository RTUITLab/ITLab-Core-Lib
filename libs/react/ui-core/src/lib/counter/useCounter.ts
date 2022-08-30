import {useMemo} from "react";
import styles from "./counter.module.scss";
import {CounterProps} from "./CounterProps";
import {getClasses} from '../../utils/getClasses'

export function useCounter(props: CounterProps) {
  const style = useMemo(() => {
    if (props.children && props.children.toString().length > 1)
      return {...{width: "fit-content"}, ...props.style};
    else
      return props.style
  }, [props.children, props.style])

  const classes = useMemo(() => {
    const conditions: { [index: string]: boolean } = {
      "counter": true,
      "counter-primary": props.color === "primary" || !props.color,
      "counter-red": props.color === "red",
      "counter-green": props.color === "green",
      "counter-orange": props.color === "orange",
      "counter-solid": props.type === "solid",
      "counter-outline": props.type === "outline" || !props.type,
      "counter-light": props.type === "light",
      "counter-small": props.size === "small",
      "counter-medium": props.size === "medium" || !props.size,
      "counter-large": props.size === "large",
      "counter-transparent": props.color === "transparent",
    };
    return getClasses(conditions, styles, props.className)
  }, [props]);

  const count = useMemo(() => {
    if (props.children && props.overflowCount && props.overflowCount >= 0 && Number.parseInt(props.children.toString()) > props.overflowCount) {
      return props.overflowCount + "+";
    } else {
      return props.children;
    }
  }, [props.children, props.overflowCount]);
  return {style, classes, count};
}
