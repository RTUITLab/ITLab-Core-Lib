import React, {useMemo, useState} from 'react'
import styles from './input-number.module.scss'
import {InputNumberProps} from './InputNumberProps'

/**
 * Hook for input-number
 */

export function useInputNumber(props: InputNumberProps) {
  const [value, setValue] = useState<number | string>( props.defaultValue || '')
  const [width, setWidth] = useState<number>(String(value).length === 0 ? 1 : String(value).length)
  const step = props.step || 1

  const handleClick = (count: number) => {
    const result = (Number(count) + Number(value)).toFixed(getPrecision())

    const limitedValue = getLimitedValue(result)
    setValueWidth(limitedValue)

    if(String(count) === '') setValue('')
    else setValue(Number(limitedValue))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) props.onChange(e)
    const value = e.target.value
    const limitedValue = getLimitedValue(value)

    if(limitedValue === '' || !isNaN(Number(limitedValue))) {
      setValueWidth(limitedValue)
      if(limitedValue === '') setValue('')
      else setValue(Number(limitedValue))
    }
  }

  const setValueWidth = (number: string) => {
    if(number.length === 0) setWidth(1)
    else setWidth(number.length)
  }

  //protection from 1.53 + 0.5 = 2.0300000000000002, etc.
  const getNumberAfterComma = (number: string) => {
    return number.includes('.') ? (number.split('.')[1].length) : (0)
  }
  const getPrecision = () => {
    const stepLength = getNumberAfterComma(String(step))
    const valueLength = getNumberAfterComma(String(value))

    return (valueLength > stepLength) ? valueLength : stepLength
  }
  const getLimitedValue = (number: string) => {
    let result = number
    if(props.min && number <= props.min) result = String(props.min)
    if(props.max && number >= props.max) result = String(props.max)
    return result
  }

  const classes = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "inputNumber-wrapper": true,
      "inputNumber-wrapper-disabled": props.disabled === true,
      "inputNumber-wrapper-readonly": props.readonly === true,
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

