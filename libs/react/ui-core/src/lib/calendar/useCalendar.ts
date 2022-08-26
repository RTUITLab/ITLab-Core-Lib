import {CalendarProps} from './CalendarProps'
import {useCallback} from 'react'

export function useCalendar(props: CalendarProps) {
  const handleSelectDate = useCallback((date: Date | string) => {
    if(props.onSelectDate) props.onSelectDate(date)
  }, [props])

  return {handleSelectDate}
}
