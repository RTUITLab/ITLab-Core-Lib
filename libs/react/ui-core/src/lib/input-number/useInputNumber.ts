import React, {useCallback, useEffect, useMemo, useState} from 'react'
import styles from './input-number.module.scss'
import {InputNumberProps} from './InputNumberProps'

/**
 * Hook for input-number
 */

export function useInputNumber(props: InputNumberProps) {
  const [value, setValue] = useState<number | string>('')
  const [width, setWidth] = useState<number>(1)
  const step = props.step || 1

  useEffect(() => {
    setValue(props.defaultValue ? getLimitedValue(String(props.defaultValue)) : '')
    setWidth(props.defaultValue ? ((props.defaultValue.toString().length === 0 ) ? 1 : props.defaultValue.toString().length) : 1 )
  }, [])

  const handleClick = useCallback((count: number) => {
    if(!props.disabled && !props.readonly) {
      let result
      if(value === '-') {
        result = (Number(count)).toFixed(getPrecision())
      }
      else {
        result = (Number(count) + Number(value)).toFixed(getPrecision())
      }

      const limitedValue = getLimitedValue(result)
      setValueWidth(limitedValue)
      setValue(Number(limitedValue))
    }
  }, [props, value])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) props.onChange(e)
    const value = e.target.value

    if(value === '' || !isNaN(Number(value))) {
      setValueWidth(value)
      if(value === '') setValue('')
      else setValue(Number(value))
    }
    else if (value === '-') setValue('-')
  }, [props])

  const setValueWidth = useCallback((number: string) => {
    if(number.length === 0) setWidth(1)
    else setWidth(number.length)
  }, [])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if(props.onBlur) props.onBlur(e)
    const limitedValue = String(getLimitedValue(String(value)))

    if(limitedValue === '' || !isNaN(Number(limitedValue))) {
      setValue(limitedValue)
    }
    else if (value === '-') setValue('-')
    setValueWidth(limitedValue)
  }, [props, value])

  //protection from 1.53 + 0.5 = 2.0300000000000002, etc.
  const getNumberAfterComma = useCallback((number: string) => {
    return number.includes('.') ? (number.split('.')[1].length) : (0)
  }, [])

  const getPrecision = useCallback(() => {
    const stepLength = getNumberAfterComma(String(step))
    const valueLength = getNumberAfterComma(String(value))

    return (valueLength > stepLength) ? valueLength : stepLength
  }, [value, step])

  const getLimitedValue = useCallback((number: string) => {
    let result = number
    if(props.min && number <= props.min) result = String(props.min)
    if(props.max && number >= props.max) result = String(props.max)
    return result
  }, [props.min, props.max])

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

  return {classes, width, handleChange, step, handleClick, value, handleBlur}
}

