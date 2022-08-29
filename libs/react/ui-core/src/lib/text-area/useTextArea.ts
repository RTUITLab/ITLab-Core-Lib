import React, {useCallback, useMemo, useState} from 'react'
import styles from './text-area.module.scss'
import {TextAreaProps} from './TextAreaProps'

export function useTextArea(props: TextAreaProps) {
  const [length, setLength] = useState(props.defaultValue?.length || 0)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(props.onChange) props.onChange(e)
    if(!!props.onError && !!props.maxLength) props.onError()
    setLength(e.target.value.length)
  }, [props])

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
    else if (!props.size) classList.push(styles[`medium-size`]);

    if (typeof props.className === 'string') classList.push(props.className);
    else if (typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props, length])

  return {classes, handleChange, length}
}

