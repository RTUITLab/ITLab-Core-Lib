import React, {useMemo, useState} from 'react'
import styles from './currency-input.module.scss'
import {CurrencyInputProps} from './CurrencyInputProps'

/**
 * Hook for currency-input
 */

export function useInputNumber(props: CurrencyInputProps) {
  const [value, setValue] = useState<number | string>( props.defaultValue || '')
  const [width, setWidth] = useState<number>(String(value).length === 0 ? 1 : String(value).length)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) props.onChange(e)
    const value = e.target.value
    const limitedValue = getLimitedValue(value)

    if(limitedValue === '' || !isNaN(Number(limitedValue))) {
      setValueWidth(limitedValue)
      if(limitedValue === '') setValue('')
      else setValue(Number(limitedValue))
    }
    else if (limitedValue === '-') setValue('-')
  }

  const setValueWidth = (number: string) => {
    if(number.length === 0) setWidth(1)
    else setWidth(number.length)
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
      "currencyInput-wrapper": true,
      "currencyInput-wrapper-disabled": props.disabled === true,
      "currencyInput-wrapper-readonly": props.readonly === true,
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

  return {classes, width, handleChange, value}
}
