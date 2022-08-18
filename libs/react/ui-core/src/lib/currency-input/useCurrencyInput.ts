import React, {useEffect, useMemo, useState} from 'react'
import styles from './currency-input.module.scss'
import {CurrencyInputProps} from './CurrencyInputProps'

/**
 * Hook for currency-input
 */

export function useInputNumber(props: CurrencyInputProps) {
  const getSpacedValue = (number: string) => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const [value, setValue] = useState<number | string>( getSpacedValue(String(props.defaultValue)) || '')
  const [width, setWidth] = useState<string>('1ch')
  const localRef = React.useRef<any>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) props.onChange(e)
    const value = e.target.value
    const limitedValue = String(getLimitedValue(value))

    if(limitedValue === '' || !isNaN(Number(limitedValue))) {
      const spacedValue = getSpacedValue(limitedValue)
      if(spacedValue === '') setValue('')
      else setValue(spacedValue)
    }
  }

  useEffect(() => {
    const valueWidth = localRef.current.scrollWidth
    if(valueWidth === 0) setWidth(1 + 'ch')
    else setWidth(valueWidth + 'px')
  }, [value])

  const getLimitedValue = (number: string) => {
    let result = number.split(' ').join('')
    if(props.min && number <= props.min) result = String(props.min)
    if(props.max && number >= props.max) result = String(props.max)
    return Number(result)
  }


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

  return {classes, width, handleChange, value, localRef}
}
