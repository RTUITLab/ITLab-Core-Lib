import React, {FC, useCallback, useMemo} from 'react'
import styles from './calendar.module.scss'
import {CalendarProps} from './CalendarProps'
import Icon from '../icon/icon'
import {CalendarFunctions} from './CalendarFunctions'
import {CalendarHeaderType} from './CalendarHeaderProps'
import {CalendarDaysType} from './CalendarDaysProps'
import {useCalendar} from './useCalendar'
import {CalendarCellsType} from './CalendarCellsProps'

export const Calendar:FC<CalendarProps> = React.memo((props) => {
  const {handleSelectDate, classes, setCurrentMonth, currentMonth, selectedDate, endDate} = useCalendar(props)
  const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  const weeks = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  const onDateClick = useCallback((day: Date| string) => {
    handleSelectDate(day)
  }, [handleSelectDate]);

  const nextMonth = useCallback(() => {
    setCurrentMonth(new Date((new Date(currentMonth)).setMonth(currentMonth.getMonth() + 1)))
  }, [currentMonth]);

  const prevMonth = useCallback(() => {
    setCurrentMonth(new Date((new Date(currentMonth)).setMonth(currentMonth.getMonth() - 1)))
  }, [currentMonth]);

  return (
    <div className={classes} style={props.style}>
      <CalendarHeader currentMonth={currentMonth} month={month} prevMonth={prevMonth} nextMonth={nextMonth} />
      <CalendarDays weeks={weeks} />
      <CalendarCells currentMonth={currentMonth} selectedDate={selectedDate} endDate={endDate === '' ? undefined : endDate} onDateClick={onDateClick} />
      <button className={styles['calendar-clearBtn']} onClick={() => onDateClick('')}>Удалить</button>
    </div>
  )
});

const CalendarHeader:FC<CalendarHeaderType> = React.memo(({currentMonth, month, prevMonth, nextMonth}) => {
  const displayedMonth = month[currentMonth.getMonth()] + ' ' + currentMonth.getFullYear()
  return (
    <div className={`${styles['calendar-header']} ${styles['calendar-row']}`}>
      <span className={`${styles['calendar-icon']}`} onClick={prevMonth}><Icon name={'ri-arrow-left-s-line'} type={'line'}/></span>
      <div className={`${styles['calendar-title']}`}>
        {displayedMonth}
      </div>
      <span className={`${styles['calendar-icon']}`} onClick={nextMonth}><Icon name={'ri-arrow-right-s-line'} type={'line'}/></span>
    </div>
  );
})

const CalendarDays:FC<CalendarDaysType> = React.memo(({weeks}) => {
  const days = [];
  const startDate = CalendarFunctions.getMonday(new Date());
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className={`${styles['calendar-col']}`} key={i}>
        {weeks[CalendarFunctions.addDays(startDate, i - 1).getDay()]}
      </div>
    );
  }

  return <div className={`${styles['calendar-days']} ${styles['calendar-row']}`}>{days}</div>;
})

const CalendarCells:FC<CalendarCellsType> = React.memo(({currentMonth, selectedDate, endDate, onDateClick}) => {
  const monthStart = useMemo(() => CalendarFunctions.startOfMonth(currentMonth), [currentMonth]);
  const monthEnd = useMemo(() => CalendarFunctions.endOfMonth(currentMonth), [currentMonth])
  const startDate = useMemo(() => CalendarFunctions.getMonday(monthStart), [monthStart])

  const rows = []as React.ReactNode[]
  let days = [] as React.ReactNode[]
  let day = startDate
  let formattedDate = 0

  const getDayClasses = useCallback((day: Date, selectedDate: Date, endDate: Date | undefined) => {
    const classList = [] as string [];

    const conditions:{[index: string]:boolean} = {
      "calendar-col": true,
      "calendar-cell": true,
      "calendar-selected": (CalendarFunctions.isSameDay(day, selectedDate) || (!!endDate && CalendarFunctions.isSameDay(day, endDate))),
      "calendar-current": CalendarFunctions.isCurrentDay(day),
      "calendar-inRange-number": !!endDate && CalendarFunctions.compareDates(day, endDate) && CalendarFunctions.compareDates(selectedDate, day),
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
      "calendar-dayContainer-firstRange": (CalendarFunctions.isSameDay(day, selectedDate)), //Стартовая дата
      "calendar-dayContainer-lastRange": (!!endDate && CalendarFunctions.isSameDay(day, endDate)), //Конечная дата
      "calendar-dayContainer-topRight": (CalendarFunctions.isSameDay(day, CalendarFunctions.endOfWeek(selectedDate))) || //Если день совпадает с концом недели стартовой даты
        (!!endDate && (CalendarFunctions.isSameDay(day, CalendarFunctions.endOfWeek(CalendarFunctions.startOfMonth(endDate))))), //Если день совпадает с концом первой недели месяца конечной даты
      "calendar-dayContainer-topLeft": CalendarFunctions.isSameDay(CalendarFunctions.getMonday(CalendarFunctions.addDays(selectedDate, 6)), day), //Если день совпадает с началом недели дня, который на 6 дней больше стартовой даты
      "calendar-dayContainer-bottomRight": (!!endDate && CalendarFunctions.isSameDay(CalendarFunctions.endOfWeek(CalendarFunctions.addDays(endDate, -6)), day) ), //Если день совпадает с концом недели дня, который на 6 дней меньше конечной даты
      "calendar-dayContainer-bottomLeft": (!!endDate && CalendarFunctions.isSameDay(day, CalendarFunctions.getMonday(endDate))) || // Если день совпадает с началом недели конечной даты
        (CalendarFunctions.isSameDay(day, CalendarFunctions.getMonday(CalendarFunctions.endOfMonth(selectedDate)))), //Если день совпадает с началом недели последней недели месяца начальной даты
      "calendar-dayContainer-onlyChild":
        (!!endDate && CalendarFunctions.isSameDay(selectedDate, CalendarFunctions.endOfWeek(day)) && CalendarFunctions.compareDates(endDate, CalendarFunctions.addDays(day, 6))) || //Если стартовая дата стоит концом недели и через неделю дата не входит в выбранную
        (!!endDate && CalendarFunctions.isSameDay(endDate, CalendarFunctions.getMonday(day)) && CalendarFunctions.compareDates(CalendarFunctions.addDays(day, -6), selectedDate)) //Если конечная дата стоит началом недели и за неделю до этого дата не входит в выбранную
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    return classList.join(' ');

  }, []);

  useMemo(() => {
    while (day <= monthEnd) {
      for (let i = 0; i < 7; i++) {
        formattedDate = day.getDate();
        const cloneDay = day;
        days.push(
          <React.Fragment key={String(day)}>
            {
              CalendarFunctions.isSameMonth(day, monthStart) ?
                <div key={String(day)} className={getContainerDayClasses(day, selectedDate, endDate)}>
                  <div
                    className={getDayClasses(day, selectedDate, endDate)}
                    onClick={() => onDateClick(new Date(cloneDay))}
                  >
                    <div  className={`${styles['calendar-number']}`}>{formattedDate}</div>
                  </div>
                  {endDate && (CalendarFunctions.compareDates(day, endDate) && CalendarFunctions.compareDates(selectedDate, day) )&&
                    <div className={styles['calendar-inRange']} />
                  }
                </div>
                :
                <div key={String(day)} className={styles['calendar-dayContainer']}>
                  <div className={`${styles['calendar-col']} ${styles['calendar-cell']}`}></div>
                </div>
            }
          </React.Fragment>

        );
        day = CalendarFunctions.addDays(day, 1);
      }
      rows.push(
        <div className={`${styles['calendar-row']}`} key={String(day)}>
          {days}
        </div>
      );
      days = [];
    }
  }, [currentMonth, selectedDate, endDate])

  return <div className={`${styles['calendar-body']}`}>{rows}</div>;
})
