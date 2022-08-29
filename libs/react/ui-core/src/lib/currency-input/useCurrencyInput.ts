import React, {useCallback, useEffect, useMemo, useState} from 'react'
import styles from './currency-input.module.scss'
import {CurrencyInputProps} from './CurrencyInputProps'

/**
 * Hook for currency-input
 */

export function useInputNumber(props: CurrencyInputProps) {
  const getSpacedValue = useCallback((number: string) => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }, [])

  const [value, setValue] = useState<number | string>(0)
  const [width, setWidth] = useState<string>('1ch')
  const localRef = React.useRef<any>()

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) props.onChange(e)
    const value = e.target.value
    const erasedValue = getErasedNumber(value)
    if(erasedValue === '' || !isNaN(Number(erasedValue))) {
      const spacedValue = getSpacedValue(erasedValue)
      if(spacedValue === '') setValue('')
      else setValue(spacedValue)
    }
    else if (value === '-') setValue('-')
  }, [props])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if(props.onBlur) props.onBlur(e)
    const limitedValue = String(getLimitedValue(String(value)))
    if(limitedValue === '' || !isNaN(Number(limitedValue))) {
      const spacedValue = getSpacedValue(limitedValue)
      if(spacedValue === '') setValue('')
      else setValue(spacedValue)
    }
    else if (value === '-') setValue('-')
  }, [props, value])

  useEffect(() => {
    if(props.defaultValue) {
      const limitedValue = String(getLimitedValue(String(props.defaultValue)))
      setValue(getSpacedValue(limitedValue))
    }
    else setValue('')
  }, [])

  useEffect(() => {
    const valueWidth = localRef.current.scrollWidth
    if(valueWidth === 0) setWidth(1 + 'ch')
    else setWidth(valueWidth + 'px')
  }, [value])

  const getLimitedValue = useCallback((number: string) => {
    if(number === '') return ''
    let result = getErasedNumber(number)
    if(props.min && (Number(result) <= props.min)) result = String(props.min)
    if(props.max && (Number(result) >= props.max)) result = String(props.max)
    return Number(result)
  }, [props])

  const getErasedNumber = useCallback((number:string) => {
    if(number === '') return ''
    return number.split(' ').join('')
  }, [])


  const classes = useMemo(() => {
    const classList = [];
    const conditions:{[index: string]:boolean} = {
      "currencyInput-wrapper": true,
      "currencyInput-wrapper-default": !props.isSuccess && !props.isAwaiting,
      "currencyInput-wrapper-disabled": props.disabled === true,
      "currencyInput-wrapper-readonly": props.readonly === true,
      "currencyInput-wrapper-success": props.isSuccess === true,
      "currencyInput-wrapper-awaiting": props.isAwaiting === true,
      "currencyInput-wrapper-invalid": props.invalid === true,
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

  return {classes, width, handleChange, handleBlur, value, localRef}
}
