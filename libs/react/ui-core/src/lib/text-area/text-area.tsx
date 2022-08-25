/* eslint-disable-next-line */
import React, {useMemo} from "react";
import styles from './text-area.module.scss'
import {TextAreaProps} from "./TextAreaProps";
import {getAllEvents} from "../../utils/getAllEvents";

export function TextArea(props: TextAreaProps) {

  const classes = useMemo(() => {
    const classList = [styles['text-area']];

    if (props.size) {
      classList.push(styles[`${props.size}-size`]);
    }

    if (props.className) {
      if (typeof props.className === 'string') {
        classList.push(props.className);
      } else if (typeof props.className === 'object') {
        classList.push(...props.className);
      }
    }

    return classList.join(' ');
  }, [props.size])
  return (
    <textarea
      className={classes}
      defaultValue={props.defaultValue || ""}
      placeholder={props.placeholder || ""}
      name={props.name || ""}
      style={props.style}
      disabled={props.disabled || false}
      onChange={props.onChange}
      {...getAllEvents(props)}
      id={props.id || ""}>
    </textarea>
  );
}

export default TextArea;
