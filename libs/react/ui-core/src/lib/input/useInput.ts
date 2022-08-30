import React, {createRef, useCallback, useEffect, useMemo, useState} from 'react'
import {InputProps} from './InputProps'
import styles from './input.module.scss'
import {CalendarFunctions} from '../calendar/CalendarFunctions'
import {getClasses} from '../../utils/getClasses'

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
     const conditions:{[index: string]:boolean} = {
      "input-wrapper": true,
      "input-wrapper-large": props.size === 'large',
      "input-wrapper-small": props.size === 'small',
      "input-wrapper-medium": props.size === 'medium' || !props.size,
      "input-wrapper-disabled": !!props.disabled,
      "input-wrapper-readonly":  !!props.readonly,
      "input-wrapper-valid":  !!props.valid,
      "input-wrapper-invalid":  !!props.error,
    };
    return getClasses(conditions, styles, props.className)
  }, [props]);

  const iconClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "input-icon": true,
      "input-icon-left": props.iconPosition === 'left' || !props.iconPosition,
      "input-icon-right": props.iconPosition === 'right',
    };
    return getClasses(conditions, styles)
  }, [props]);

  return {classes, iconClasses, isOpen, handleClick, calendar, value, handleSelectDate, handleChange, selectedDate, endDate}
}

