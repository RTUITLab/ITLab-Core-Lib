import React, {FC, useCallback} from 'react'
import styles from './calendar.module.scss'
import {useCalendar} from './useCalendar'
import {CalendarProps} from './CalendarProps'

export const Calendar:FC<CalendarProps> = React.memo(({onSelectDate, setCurrentMonth, currentMonth, selectedDate, size, endDate}) => {
  const {getMonday, endOfMonth, startOfMonth, endOfWeek, addDays, isSameDay, isSameMonth, isCurrentDay, compareDates, isSameWeek} = useCalendar()

  const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  const weeks = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
  const onDateClick = (day: Date) => {
    onSelectDate(day)
  };

  const nextMonth = () => {
    setCurrentMonth(new Date((new Date(currentMonth)).setMonth(currentMonth.getMonth() + 1)))
  };

  const prevMonth = () => {
    setCurrentMonth(new Date((new Date(currentMonth)).setMonth(currentMonth.getMonth() - 1)))
  };

  return (
    <div className={`${styles['calendar']} ${size === 'small' ? styles['calendar-small'] : ''}`}>
      <CalendarHeader month={month} prevMonth={prevMonth} nextMonth={nextMonth} currentMonth={currentMonth} />
      <CalendarDays weeks={weeks} getMonday={getMonday} addDays={addDays} />
      <CalendarCells addDays={addDays} getMonday={getMonday} currentMonth={currentMonth} endOfMonth={endOfMonth} isSameMonth={isSameMonth}
                     startOfMonth={startOfMonth} isSameDay={isSameDay} onDateClick={onDateClick} selectedDate={selectedDate}
                     isCurrentDay={isCurrentDay} endDate={endDate} compareDates={compareDates} isSameWeek={isSameWeek} endOfWeek={endOfWeek} />
      <button className={styles['calendar-clearBtn']} onClick={() => onSelectDate('')}>Удалить</button>
    </div>
  )
});

const CalendarHeader:FC<CalendarHeaderType> = ({month, prevMonth, nextMonth, currentMonth}) => {
  return (
    <div className={`${styles['calendar-header']} ${styles['calendar-row']}`}>
      <span className={`${styles['calendar-icon']}`} onClick={prevMonth}><i className='ri-arrow-left-s-line' /></span>
      <div className={`${styles['calendar-title']}`}>
        {month[currentMonth.getMonth()]} {currentMonth.getFullYear()}
      </div>
      <span className={`${styles['calendar-icon']}`} onClick={nextMonth}><i className='ri-arrow-right-s-line' /></span>
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
      <div className={`${styles['calendar-col']}`} key={i}>
        {weeks[addDays(startDate, i - 1).getDay()]}
      </div>
    );
  }

  return <div className={`${styles['calendar-days']} ${styles['calendar-row']}`}>{days}</div>;
}
type CalendarDaysType = {
  weeks: string[]
  getMonday: (day: Date) => Date
  addDays: (start_date: Date, days: number) => Date
}

const CalendarCells:FC<CalendarCellsType> = ({currentMonth, selectedDate, endOfMonth, isCurrentDay, endDate, isSameWeek,
                                               startOfMonth, compareDates, addDays, isSameDay, isSameMonth, onDateClick, getMonday, endOfWeek}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = getMonday(monthStart);

  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = 0;

  const getDayClasses = useCallback((day: Date, selectedDate: Date, endDate: Date | undefined) => {
    const classList = [] as string [];

    const conditions:{[index: string]:boolean} = {
      "calendar-col": true,
      "calendar-cell": true,
      "calendar-selected": (isSameDay(day, selectedDate) || (endDate && isSameDay(day, endDate))) || false,
      "calendar-current": isCurrentDay(day),
      "calendar-inRange-number": endDate && compareDates(day, endDate) && compareDates(selectedDate, day) || false,
      };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    return classList.join(' ');

  }, []);

  const getContainerDayClasses = useCallback((day: Date, selectedDate: Date, endDate: Date | undefined) => {
    const classList = [] as string [];
    const conditions:{[index: string]:boolean} = {
      "calendar-dayContainer": true,
      "calendar-dayContainer-firstRange": (isSameDay(day, selectedDate)), //Стартовая дата
      "calendar-dayContainer-lastRange": (endDate && isSameDay(day, endDate)) || false, //Конечная дата
      "calendar-dayContainer-topRight": (isSameDay(day, endOfWeek(selectedDate))) || //Если день совпадает с концом недели стартовой даты
        (endDate && (isSameDay(day, endOfWeek(startOfMonth(endDate))))) || false, //Если день совпадает с концом первой недели месяца конечной даты
      "calendar-dayContainer-topLeft": isSameDay(getMonday(addDays(selectedDate, 6)), day), //Если день совпадает с началом недели дня, который на 6 дней больше стартовой даты
      "calendar-dayContainer-bottomRight": (endDate && isSameDay(endOfWeek(addDays(endDate, -6)), day) )|| false, //Если день совпадает с концом недели дня, который на 6 дней меньше конечной даты
      "calendar-dayContainer-bottomLeft": (endDate && isSameDay(day, getMonday(endDate))) || // Если день совпадает с началом недели конечной даты
        (isSameDay(day, getMonday(endOfMonth(selectedDate)))) || false, //Если день совпадает с началом недели последней недели месяца начальной даты
      "calendar-dayContainer-onlyChild":
        (endDate && isSameDay(selectedDate, endOfWeek(day)) && compareDates(endDate, addDays(day, 6))) || //Если стартовая дата стоит концом недели и через неделю дата не входит в выбранную
        (endDate && isSameDay(endDate, getMonday(day)) && compareDates(addDays(day, -6), selectedDate)) || false //Если конечная дата стоит началом недели и за неделю до этого дата не входит в выбранную
      };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    return classList.join(' ');

  }, []);

  while (day <= monthEnd) {
    for (let i = 0; i < 7; i++) {
      formattedDate = day.getDate();
      const cloneDay = day;
      days.push(
        <>
          {
            isSameMonth(day, monthStart) ?
              <div className={getContainerDayClasses(day, selectedDate, endDate)}>
                <div
                  className={getDayClasses(day, selectedDate, endDate)}
                  key={String(day)}
                  onClick={() => onDateClick(new Date(cloneDay))}
                >
                  <div className={`${styles['calendar-number']}`}>{formattedDate}</div>
                </div>
                {(endDate && compareDates(day, endDate) && compareDates(selectedDate, day) )&&
                  <div className={styles['calendar-inRange']} />
                }
              </div>
              :
              <div className={styles['calendar-dayContainer']}>
                <div className={`${styles['calendar-col']} ${styles['calendar-cell']}`}></div>
              </div>
          }
        </>

      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className={`${styles['calendar-row']}`} key={String(day)}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className={`${styles['calendar-body']}`}>{rows}</div>;
}

type CalendarCellsType = {
  currentMonth: Date
  selectedDate: Date
  endDate?: Date
  startOfMonth: (date: Date) => Date
  endOfMonth: (date: Date) => Date
  getMonday: (date: Date) => Date
  endOfWeek: (date: Date) => Date
  isSameMonth: (day: Date, monthStart: Date) => boolean
  isSameDay: (day: Date, monthStart: Date) => boolean
  isSameWeek: (day: Date, selectedDate: Date) => boolean
  isCurrentDay: (day: Date) => boolean
  addDays: (start_date: Date, days: number) => Date
  onDateClick: (day: Date) => void
  compareDates: (start: Date, end: Date) => boolean
}
