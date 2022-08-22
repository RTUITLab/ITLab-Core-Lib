export function useCalendar() {
  //Первый день недели
  function getMonday(date: Date) {
    date = new Date(date);
    const day = date.getDay()
    const diff = date.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
    return new Date(date.setDate(diff));
  }
  //Последний день недели
  function endOfWeek(date: Date) {
    const lastDay = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.getFullYear(), date.getMonth(), lastDay);
  }
  //Начало месяца
  function startOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }
  //Последний день месяца
  function endOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }
  //Добавление указанного количества дней к start_date
  function addDays(start_date:Date, days: number) {
    const date = new Date(start_date);
    date.setDate(date.getDate() + days);
    return date;
  }
  //Если месяц такой же, как у выбранного дня
  function isSameMonth(day: Date, monthStart: Date) {
    return day.getMonth() === monthStart.getMonth() && day.getFullYear() === monthStart.getFullYear()
  }
  //Если день такой же, как выбранный
  function isSameDay(day: Date, selectedDay: Date) {
    return day.getMonth() === selectedDay.getMonth() && day.getFullYear() === selectedDay.getFullYear() && day.getDate() === selectedDay.getDate()
  }
  //Если выбранный день - текущий
  function isCurrentDay(day: Date) {
    const currentDay = new Date()
    return day.getMonth() === currentDay.getMonth() && day.getFullYear() === currentDay.getFullYear() && day.getDate() === currentDay.getDate()
  }
  //Строковая дата в традиционном формате
  function getStringDate(day: Date) {
    return day.getFullYear() + '-' + ('0'+(day.getMonth()+1)).slice(-2) + '-' + ('0'+day.getDate()).slice(-2)
  }
  //Строковая дата в ru формате
  function getLocalStringDate(day: Date) {
    return ('0'+day.getDate()).slice(-2) + '.' + ('0'+(day.getMonth()+1)).slice(-2) + '.' +  day.getFullYear()
  }
  //Сравнение двух дат
  function compareDates(start: Date, end: Date) {
    return start < end
  }

  return {getMonday, endOfMonth, startOfMonth, endOfWeek, addDays, isSameDay, isSameMonth, isCurrentDay, getStringDate, getLocalStringDate, compareDates}
}
