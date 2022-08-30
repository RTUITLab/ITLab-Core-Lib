import React, {createRef, useCallback, useEffect, useMemo, useState} from 'react'
import {InputProps} from './InputProps'
import styles from './input.module.scss'
import {CalendarFunctions} from '../calendar/CalendarFunctions'

export function useInput(props: InputProps) {
  const [isOpen, setIsOpen] = useState<boolean>(props.autoFocus || false)
  const [value, setValue] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date | ''>('')
  const calendar = createRef<HTMLDivElement>();

  useEffect(() => {
    if(props.type === 'date' || props.type === 'dateRange') {
      if(props.defaultValue) setValue(CalendarFunctions.getStringDate(props.defaultValue as string|Date))
      else setValue('')
    }
    else setValue(props.defaultValue || '')
  }, [])

  const handleClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    if(props.onClick) props.onClick(e)
    if(!props.readonly && !props.disabled) {
      setIsOpen(true)
    }
  }, [])

  const handleChange = useCallback ((e: React.ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) props.onChange(e)
    if (props.type === 'date' || props.type === 'dateRange') {
      if(e.target.value !== '') {
        if(props.type === 'dateRange') {
          setValue(e.target.value.split(' ').join('').replace(/-|—/, ' — '))
          const dateString = e.target.value.split(' ').join('').replace(/-|—/, ' — ').split('—')
          const firstDate = dateString[0].split(' ').join('')
          const secondDate = dateString[1] && dateString[1].split(' ').join('')
          //Если пользователь ввел обе даты
          if(firstDate && secondDate && CalendarFunctions.isDate(firstDate) && CalendarFunctions.isDate(secondDate)) {
            //Если первая дата меньше второй
            if(CalendarFunctions.compareDates(new Date(CalendarFunctions.getStringDate(firstDate)), new Date(CalendarFunctions.getStringDate(secondDate)))) {
              setSelectedDate(new Date(CalendarFunctions.getStringDate(firstDate)))
              setEndDate(new Date(CalendarFunctions.getStringDate(secondDate)))
            }
            else {
              setSelectedDate(new Date(CalendarFunctions.getStringDate(secondDate)))
              setEndDate(new Date(CalendarFunctions.getStringDate(firstDate)))
            }
          }
          //Если пользователь ввел только одну дату
          else if(firstDate && CalendarFunctions.isDate(CalendarFunctions.getStringDate(firstDate))) {
            setSelectedDate(new Date(CalendarFunctions.getStringDate(firstDate)))
            setEndDate('')
          }
          else if(secondDate && CalendarFunctions.isDate(CalendarFunctions.getStringDate(secondDate))) {
            setSelectedDate(new Date())
            setEndDate(new Date(CalendarFunctions.getStringDate(secondDate)))
          }
          //Если пользователь не ввел валидную дату
          else {
            setSelectedDate(new Date())
            setEndDate('')
          }
        }
        else {
          setValue(e.target.value)
          setSelectedDate(new Date(e.target.value))
        }
      }
      else setValue(e.target.value)
    }
    else setValue(e.target.value)
  }, [])

  const handleSelectDate = useCallback ((date: string) => {
    setValue(CalendarFunctions.getStringDate(date))
    if(props.type === 'date') {
      setSelectedDate(new Date(CalendarFunctions.getStringDate(date)))
    }
    else {
      const dateString = date.split('—')
      setSelectedDate(new Date(CalendarFunctions.getStringDate(dateString[0])))
      setEndDate(new Date(CalendarFunctions.getStringDate(dateString[1])))
    }
    setIsOpen(false)
  },[props.type])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = useCallback((event: any) => {
    if(isOpen && calendar.current && !calendar.current.contains(event.target)) {
      setIsOpen(false)
    }
  }, [])

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

  return {classes, iconClasses, isOpen, handleClick, calendar, value, handleSelectDate, handleChange, selectedDate, endDate}
}

