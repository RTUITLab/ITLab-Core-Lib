import React, {createRef, useEffect, useMemo, useState} from 'react'
import {InputProps} from './InputProps'
import styles from './input.module.scss'
import {useCalendar} from './calendar/useCalendar'

export function useInput(props: InputProps) {
  const [isFocus, setIsFocus] = useState<boolean>(props.autoFocus || false)
  const [value, setValue] = useState<string | number>(props.value || props.defaultValue || '')
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const calendar = createRef<HTMLLabelElement>();
  const {getStringDate} = useCalendar()

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if(props.onFocus) props.onFocus(e)
    setIsFocus(true)
  }

  const handleSelectDate = (date: Date) => {
    if(props.onSelectDate) props.onSelectDate(date)
    setSelectedDate(date)
    setValue(getStringDate(date))
    // setIsFocus(false)
  }

  const handleChange = (e: any) => {
    debugger
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (event: any) => {
    if(isFocus && calendar.current && !calendar.current.contains(event.target)) {
      setIsFocus(false)
    }
  }

  const classes = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "input-wrapper": true,
      "input-wrapper-large": props.size === 'large',
      "input-wrapper-small": props.size === 'small',
      "input-wrapper-medium": props.size === 'medium',
      "input-wrapper-disabled": props.disabled !== undefined && props.disabled,
      "input-wrapper-readonly":  props.readonly !== undefined && props.readonly,
      "input-wrapper-valid":  props.valid !== undefined && props.valid,
      "input-wrapper-invalid":  props.error !== undefined && props.error,
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(!props.size) classList.push(styles['input-wrapper-medium']);

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');

  }, [props]);

  const iconClasses = useMemo(() => {
    const classList = [styles['input-icon']];

    if(props.iconPosition === 'left' || !props.iconPosition) classList.push(styles['input-icon-left']);
    if(props.iconPosition === 'right') classList.push(styles['input-icon-right']);

    return classList.join(' ');
  }, [props]);

  console.log(isFocus)

  return {classes, iconClasses, isFocus, handleFocus, calendar, value, handleSelectDate, handleChange, selectedDate}
}

