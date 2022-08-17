import React, {useMemo, useState} from 'react'
import styles from './input-number.module.scss'
import {InputNumberProps} from './InputNumberProps'

/**
 * Hook for input-number
 */

export function useInputNumber(props: InputNumberProps) {
  const [width, setWidth] = useState<number>(1)
  const [value, setValue] = useState<number | string>(props.value || props.defaultValue || '')
  const step = props.step || 1

  const handleClick = (count: number) => {
    handleChangeValue(String(count + Number(value)))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) props.onChange(e)
    const value = e.target.value.replace(/[^0-9]/g, "")
    handleChangeValue(value)
  }

  const handleChangeValue = (value: string) => {
    if(value.length === 0) setWidth(1)
    else setWidth(value.length)
    setValue(value)
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

  return {classes, width, handleChange, step, handleClick, value}
}

