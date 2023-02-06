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
  const [isSetStartDate, setIsSetStartDate] = useState(false)

  const calendar = createRef<HTMLDivElement>();

  useEffect(() => {
    if(props.type === 'date' || props.type === 'dateRange') {
      if(props.defaultValue) {
        if(props.type === 'dateRange') {
          setValue(CalendarFunctions.getStringDate(props.defaultValue as string))
          const dateString = props.defaultValue.split('—')
          setSelectedDate(new Date(CalendarFunctions.getStringDate(dateString[0])))
          setEndDate(new Date(CalendarFunctions.getStringDate(dateString[1])))
        }
        else {
          setValue(CalendarFunctions.getStringDate(props.defaultValue as string))
          setSelectedDate(new Date(CalendarFunctions.getStringDate(props.defaultValue)))
        }
      }
      else setValue('')
    }
    else setValue(props.defaultValue || '')
  }, [props.defaultValue])

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
  }, [props.onChange])

  const handleSelectDate = useCallback ((startDate: string, endDate?: string) => {
    if(startDate === '' && endDate === '') {
      setValue('')
      setSelectedDate(new Date())
      setEndDate('')
      setIsSetStartDate(false)
    }
    else {
      if(props.type === 'date') {
        if (props.onSelectDate) props.onSelectDate(startDate)
        setValue(CalendarFunctions.getStringDate(startDate))
        setSelectedDate(new Date(CalendarFunctions.getStringDate(startDate)))
        setIsOpen(false)
      }
      else {
        // const dateString = date.split('—')
        if(endDate === '') {
          setSelectedDate(new Date(CalendarFunctions.getStringDate(startDate)))
          setValue(CalendarFunctions.getLocalStringDate(startDate))
          setIsSetStartDate(true)
          setEndDate('')
        }
        else if (endDate && endDate !== '') {
          const finalDate = CalendarFunctions.getLocalStringDate(startDate) + ' — ' + CalendarFunctions.getLocalStringDate(endDate)
          if (props.onSelectDate) props.onSelectDate(finalDate)
          setSelectedDate(new Date(CalendarFunctions.getStringDate(startDate)))
          setEndDate(new Date(CalendarFunctions.getStringDate(endDate)))
          setValue(finalDate)
          setIsSetStartDate(false)
          setIsOpen(false)
        }
      }
    }
  },[props.type, props.onSelectDate])

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
  }, [calendar])

  const classes = useMemo(() => {
     const conditions:{[index: string]:boolean} = {
      "input-wrapper": true,
      "input-wrapper-large": props.size === 'large',
      "input-wrapper-small": props.size === 'small',
      "input-wrapper-medium": props.size === 'medium' || !props.size,
      "input-wrapper-disabled": Boolean(props.disabled),
      "input-wrapper-readonly":  Boolean(props.readonly),
      "input-wrapper-valid":  Boolean(props.valid),
      "input-wrapper-invalid":  Boolean(props.error),
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

  return {classes, iconClasses, isOpen, handleClick, calendar, value, handleSelectDate, handleChange, selectedDate, endDate, isSetStartDate}
}

