import React, {useMemo, useState} from 'react'
import styles from './text-area.module.scss'
import {TextAreaProps} from './TextAreaProps'

export function useTextArea(props: TextAreaProps) {
  const [length, setLength] = useState(props.defaultValue?.length || 0)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(props.onChange) props.onChange(e)
    setLength(e.target.value.length)
  }

  const classes = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "text-area": true,
      "text-area-readonly": props.readonly !== undefined && props.readonly,
      "text-area-valid":  props.valid !== undefined && props.valid,
      "text-area-invalid":  (props.error !== undefined && props.error) || (props.maxLength !== undefined && props.maxLength < length),
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if (props.size) classList.push(styles[`${props.size}-size`]);
    if (!props.size) classList.push(styles[`medium-size`]);

    if (props.className) {
      if (typeof props.className === 'string') classList.push(props.className);
      else if (typeof props.className === 'object') classList.push(...props.className);
    }
    return classList.join(' ');
  }, [props.size, length])

  return {classes, handleChange, length}
}

