import React, {useMemo, useState} from 'react'
import styles from './input-number.module.scss'
import {InputNumberProps} from './InputNumberProps'

/**
 * Hook for input-number
 */

export function useInputNumber(props: InputNumberProps) {
  const [width, setWidth] = useState<number>(1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) props.onChange(e)
    setWidth(e.target.value.length)
  }

  const classes = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "inputNumber-wrapper": true,
      "inputNumber-wrapper-disabled": props.disabled === true,
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');

  }, [props]);

  return {classes, width, handleChange}
}

