import React, {FC, useState} from 'react'
import styles from './calendar.module.scss'
import {useCalendar} from './useCalendar'

export const Calendar = React.memo(() => {
  const {getMonday, endOfMonth, startOfMonth, endOfWeek, addDays, isSameDay, isSameMonth} = useCalendar()

  const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  const weeks = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const onDateClick = (day: Date) => {
    setSelectedDate(day)
  };

  const nextMonth = () => {
    setCurrentMonth((currentMonth) => new Date((new Date(currentMonth)).setMonth(currentMonth.getMonth() + 1)))
  };

  const prevMonth = () => {
    setCurrentMonth((currentMonth) => new Date((new Date(currentMonth)).setMonth(currentMonth.getMonth() - 1)))
  };

  return (
    <div className={styles['calendar']}>
      <CalendarHeader month={month} prevMonth={prevMonth} nextMonth={nextMonth} currentMonth={currentMonth} />
      <CalendarDays weeks={weeks} getMonday={getMonday} addDays={addDays} />
      <CalendarCells addDays={addDays} getMonday={getMonday} currentMonth={currentMonth} endOfMonth={endOfMonth} isSameMonth={isSameMonth}
                     startOfMonth={startOfMonth} isSameDay={isSameDay} endOfWeek={endOfWeek} onDateClick={onDateClick} selectedDate={selectedDate} />

    </div>
  )
});

const CalendarHeader:FC<CalendarHeaderType> = ({month, prevMonth, nextMonth, currentMonth}) => {
  return (
    <div className={`${styles['header']} ${styles['row']}`}>
      <span className={`${styles['icon']}`} onClick={prevMonth}><i className='ri-arrow-left-s-line' /></span>
      <div className={`${styles['title']}`}>
        {month[currentMonth.getMonth()]} {currentMonth.getFullYear()}
      </div>
      <span className={`${styles['icon']}`} onClick={nextMonth}><i className='ri-arrow-right-s-line' /></span>
    </div>
  );
}
type CalendarHeaderType = {
  month: string[]
  prevMonth: () => void
  nextMonth: () => void
  currentMonth: Date
}

const CalendarDays:FC<CalendarDaysType> = ({weeks, getMonday, addDays}) => {
  const days = [];
  const startDate = getMonday(new Date());
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className={`${styles['col']} ${styles['col-center']}`} key={i}>
        {
          weeks[addDays(startDate, i - 1).getDay()]
        }
      </div>
    );
  }

  return <div className={`${styles['days']} ${styles['row']}`}>{days}</div>;
}
type CalendarDaysType = {
  weeks: string[]
  getMonday: (day: Date) => Date
  addDays: (start_date: Date, days: number) => Date
}

const CalendarCells:FC<CalendarCellsType> = ({currentMonth, selectedDate, endOfMonth,
                                               startOfMonth, endOfWeek, addDays, isSameDay, isSameMonth, onDateClick, getMonday}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  console.log('monthEnd', monthEnd)
  const startDate = getMonday(monthStart);
  const endDate = endOfWeek(monthEnd);

  console.log('monthStart', monthStart)
  console.log('monthEnd', monthEnd)
  console.log('startDate', startDate)
  console.log('endDate', endDate)

  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = 0;

  while (day <= monthEnd) {
    for (let i = 0; i < 7; i++) {
      formattedDate = day.getDate();
      const cloneDay = day;
      days.push(
        <>
          {

            isSameMonth(day, monthStart) ?
              <div
                className={`${styles['col']} ${styles['cell']} ${
                  !isSameMonth(day, monthStart)
                    ? `${styles['disabled']}`
                    : isSameDay(day, selectedDate) ? `${styles['selected']}` : ""
                }`}
                key={String(day)}
                onClick={() => onDateClick(new Date(cloneDay))}
              >
                <span className={`${styles['number']}`}>{formattedDate}</span>
              </div>
              :
              <div className={`${styles['col']} ${styles['cell']}`}></div>
          }
        </>

      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className={`${styles['row']}`} key={String(day)}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className={`${styles['body']}`}>{rows}</div>;
}

type CalendarCellsType = {
  currentMonth: Date
  selectedDate: Date
  startOfMonth: (date: Date) => Date
  endOfMonth: (date: Date) => Date
  getMonday: (date: Date) => Date
  endOfWeek: (date: Date) => Date
  isSameMonth: (day: Date, monthStart: Date) => boolean
  isSameDay: (day: Date, monthStart: Date) => boolean
  addDays: (start_date: Date, days: number) => Date
  onDateClick: (day: Date) => void
}
