import React, {useCallback, useEffect, useMemo, useState} from 'react'
import styles from './input-number.module.scss'
import {InputNumberProps} from './InputNumberProps'
import {getClasses} from '../../utils/getClasses'

/**
 * Hook for input-number
 */

export function useInputNumber(props: InputNumberProps) {
  const [value, setValue] = useState<number | string>('')
  const [width, setWidth] = useState<string>('1ch')
  const step = props.step || 1
  const spanValueRef = React.useRef<any>()

  useEffect(() => {
    setValue(props.defaultValue ? getLimitedValue(String(props.defaultValue)) : '')
  }, [props.defaultValue])

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
      setValue(Number(limitedValue))
    }
  }, [props, value])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const localValue = e.target.value

    if(localValue === '' || !isNaN(Number(localValue))) {
      if(localValue === '') {
        if(props.onChange) props.onChange(e, Number(value))
        setValue('')
      }
      else {
        if(props.onChange) props.onChange(e, Number(localValue))
        setValue(Number(localValue))
      }
    }
    else if (localValue === '-') {
      setValue('-')
      if(props.onChange) props.onChange(e, '-')
    }
  }, [props])

  useEffect(() => {
    const valueWidth = spanValueRef.current.scrollWidth
    if(valueWidth === 0) setWidth(1 + 'ch')
    else setWidth(valueWidth + 'px')
  }, [value])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if(props.onBlur) props.onBlur(e)
    const limitedValue = String(getLimitedValue(String(value)))

    if(limitedValue === '' || !isNaN(Number(limitedValue))) {
      setValue(limitedValue)
    }
    else if (value === '-') setValue('-')
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
    const conditions:{[index: string]:boolean} = {
      "inputNumber-wrapper": true,
      "inputNumber-wrapper-disabled": props.disabled === true,
      "inputNumber-wrapper-readonly": props.readonly === true,
    };
    return getClasses(conditions, styles, props.className)
  }, [props]);

  return {classes, width, handleChange, step, handleClick, value, handleBlur, spanValueRef}
}

