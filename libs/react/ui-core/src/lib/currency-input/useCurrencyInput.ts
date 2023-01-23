import React, {useCallback, useEffect, useMemo, useState} from 'react'
import styles from './currency-input.module.scss'
import {CurrencyInputProps} from './CurrencyInputProps'
import {getClasses} from '../../utils/getClasses'

/**
 * Hook for currency-input
 */

export function useInputNumber(props: CurrencyInputProps) {
    const ruble = useMemo(() => {
      return new Intl.NumberFormat('ru' ,{
        style: 'decimal',
        minimumFractionDigits: 0,
      })
    }, [])

  const [value, setValue] = useState<number | string>('')
  const [formattedValue, setFormattedValue] = useState<number | string>('')
  const [width, setWidth] = useState<string>('1ch')
  const localRef = React.useRef<any>()

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const localValue = e.target.value.replace(/\s/g,'')
    e.target.value = localValue

    if(props.onChange) props.onChange(e)
    const format = ruble.format(Number(localValue))

    if(!isNaN(Number(localValue))) {
      setValue(localValue)
      setFormattedValue(format)
    }
    else if (localValue === '-') {
      setValue('-')
      setFormattedValue('-')
    }
  }, [props.onChange, ruble])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if(props.onBlur) {
      e.target.value = e.target.value.replace(/\s/g,'')
      props.onBlur(e)
    }
  }, [props.onBlur])

  useEffect(() => {
    if(props.defaultValue) {
      const format = ruble.format(Number(props.defaultValue))
      setValue(props.defaultValue)
      setFormattedValue(format)
    }
  }, [props.defaultValue, ruble])

  useEffect(() => {
    const valueWidth = localRef.current.scrollWidth
    if(valueWidth === 0) setWidth(1 + 'ch')
    else setWidth(valueWidth + 'px')
  }, [value])

  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "currencyInput-wrapper": true,
      "currencyInput-wrapper-default": props.isSuccess === undefined,
      "currencyInput-wrapper-disabled": props.disabled === true,
      "currencyInput-wrapper-readonly": props.readonly === true,
      "currencyInput-wrapper-success": props.isSuccess === true,
      "currencyInput-wrapper-awaiting": props.isSuccess === false,
      "currencyInput-wrapper-invalid": props.invalid === true,
    };
    return getClasses(conditions, styles, props.className)

  }, [props]);

  return {classes, width, handleChange, handleBlur, formattedValue, localRef}
}
