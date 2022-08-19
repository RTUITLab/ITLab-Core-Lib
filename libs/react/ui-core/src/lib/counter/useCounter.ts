import {useMemo} from "react";
import styles from "./counter.module.scss";
import {CounterProps} from "./CounterProps";

export function useCounter(props: CounterProps) {
  const style = useMemo(() => {
    if (props.children && props.children.toString().length > 1)
      return {...{width: "fit-content"}, ...props.style};
    else
      return props.style
  }, [props.children, props.style])

  const classes = useMemo(() => {
    const classList = [styles['counter']];

    const readyClasses: { [index: string]: boolean } = {
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

    for (const i of Object.keys(readyClasses)) {
      if (readyClasses[i]) {
        classList.push(styles[i]);
      }
    }

    if (typeof props.className === "string") classList.push(props.className)
    else if (typeof props.className === "object") classList.push(props.className.join(" "))

    return classList.join(" ");
  }, [props]);

  const count = useMemo(() => {
    if (props.children && props.overflowCount && Number.parseInt(props.children.toString()) > props.overflowCount) {
      return props.overflowCount + "+";
    } else {
      return props.children;
    }
  }, [props.children, props.overflowCount]);
  return {style, classes, count};
}
