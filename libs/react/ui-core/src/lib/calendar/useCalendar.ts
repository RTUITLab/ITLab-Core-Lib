import {CalendarProps} from './CalendarProps'
import {useCallback, useEffect, useMemo, useState} from 'react'
import styles from './calendar.module.scss'
import {CalendarFunctions} from './CalendarFunctions'

export function useCalendar(props: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(props.defaultDate || new Date())
  const [endDate, setEndDate] = useState<Date | ''>(props.defaultEndDate || '')
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(selectedDate))

  useEffect(() => {
    if(props.defaultDate) {
      setCurrentMonth(props.defaultDate)
    }
  }, [props.defaultDate])

  const handleSelectDate = useCallback ((date: Date | string) => {
    if(typeof date === 'string') {
      setSelectedDate(new Date())
      setCurrentMonth(new Date())
      setEndDate('')
      if(props.onSelectDate) props.onSelectDate('', '')
    }
    else {
      if(props.type === 'date') {
        if(props.onSelectDate) props.onSelectDate(CalendarFunctions.getLocalStringDate(date))
        setSelectedDate(date)
      }
      else {
        if(props.isSetStartDate === false) {
          setSelectedDate(date)
          if(props.onSelectDate) props.onSelectDate(CalendarFunctions.getLocalStringDate(date), '')
        }
        else {
          if(CalendarFunctions.compareDates(date, selectedDate)) {
            setEndDate(selectedDate)
            setSelectedDate(date)
            if(props.onSelectDate) props.onSelectDate(CalendarFunctions.getLocalStringDate(date), CalendarFunctions.getLocalStringDate(selectedDate))
          }
          else {
            setEndDate(date)
            if(props.onSelectDate) props.onSelectDate(CalendarFunctions.getLocalStringDate(selectedDate), CalendarFunctions.getLocalStringDate(date))
          }
        }
      }
    }
  },[selectedDate, props])

  useEffect(() => {
    setSelectedDate(props.defaultDate || new Date())
    setEndDate(props.defaultEndDate || '')
  }, [props.defaultDate, props.defaultEndDate])

  const classes = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "calendar": true,
      "calendar-small": props.size === 'small',
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

  return {handleSelectDate, classes,  currentMonth, endDate, selectedDate, setCurrentMonth}
}
