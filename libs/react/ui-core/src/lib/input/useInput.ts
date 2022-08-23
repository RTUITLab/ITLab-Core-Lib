import React, {createRef, useEffect, useMemo, useState} from 'react'
import {InputProps} from './InputProps'
import styles from './input.module.scss'
import {useCalendar} from './calendar/useCalendar'

export function useInput(props: InputProps) {
  //readonly disabled check
  const [isOpen, setIsOpen] = useState<boolean>(props.autoFocus || false)
  const [value, setValue] = useState<string | number>(props.value || props.defaultValue || '')
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date | ''>('')
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())

  const calendar = createRef<HTMLDivElement>();
  const {getStringDate, getLocalStringDate, compareDates, isDate} = useCalendar()

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if(props.onClick) props.onClick(e)
    setIsOpen(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(props.onChange) props.onChange(e)
    setValue(e.target.value.split(' ').join('').replace(/-|—/, ' — '))
    if (props.type === 'date' || props.type === 'dateRange') {
      if(e.target.value !== '') {
        if(props.type === 'dateRange') {
          const dateString = e.target.value.split(' ').join('').replace(/-|—/, ' — ').split('—')
          const firstDate = dateString[0].split(' ').join('')
          const secondDate = dateString[1] && dateString[1].split(' ').join('')
          if(firstDate && secondDate && isDate(firstDate) && isDate(secondDate)) {
            if(compareDates(new Date(getStringDate(firstDate)), new Date(getStringDate(secondDate)))) {
              setSelectedDate(new Date(getStringDate(firstDate)))
              setEndDate(new Date(getStringDate(secondDate)))
              setCurrentMonth(new Date(getStringDate(secondDate)))
            }
            else {
              setSelectedDate(new Date(getStringDate(secondDate)))
              setEndDate(new Date(getStringDate(firstDate)))
              setCurrentMonth(new Date(getStringDate(firstDate)))
            }
          }
          else if(firstDate && isDate(getStringDate(firstDate))) {
            setSelectedDate(new Date(getStringDate(firstDate)))
            setCurrentMonth(new Date(getStringDate(firstDate)))
            setEndDate('')
          }
          else {
            setSelectedDate(new Date())
            setCurrentMonth(new Date())
            setEndDate('')
          }
        }
        else {
          setSelectedDate(new Date(e.target.value))
          setCurrentMonth(new Date(e.target.value))
        }
      }
    }
  }

  const handleSelectDate = (date: Date | string) => {
    if(typeof date === 'string') {
      setSelectedDate(new Date())
      setCurrentMonth(new Date())
      setValue('')
    }
    else {
      if(props.onSelectDate) props.onSelectDate(date)
      if(props.type === 'date') {
        setSelectedDate(date)
        setValue(getStringDate(date))
      }
      else {
        //Если даты конца пока нет
        if(endDate === '') {
          //Ранее выбранная дата меньше, чем выбранная сейчас
          if(compareDates(selectedDate, date)) {
            setSelectedDate(selectedDate)
            setEndDate(date)
            setValue(getLocalStringDate(selectedDate) + ' — ' + getLocalStringDate(date))
          }
          else {
            setSelectedDate(date)
            setEndDate(selectedDate)
            setValue(getLocalStringDate(date) + ' — ' + getLocalStringDate(selectedDate))
          }
        }
        else {
          //Если выбранная дата меньше, чем текущая начальная дата
          if (compareDates(date, selectedDate)){
            setSelectedDate(date)
            setEndDate(selectedDate)
            setValue(getLocalStringDate(date) + ' — ' + getLocalStringDate(selectedDate))
          }
          //Если выбранная дата больше, чем текущая дата конца или находится между
          else {
            setEndDate(date)
            setValue(getLocalStringDate(selectedDate) + ' — ' + getLocalStringDate(date))
          }
        }
      }

    }
    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (event: any) => {
    if(isOpen && calendar.current && !calendar.current.contains(event.target)) {
      setIsOpen(false)
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

  console.log(endDate)

  return {classes, iconClasses, isOpen, handleClick, calendar, value, handleSelectDate, handleChange, selectedDate, currentMonth, setCurrentMonth, endDate}
}

