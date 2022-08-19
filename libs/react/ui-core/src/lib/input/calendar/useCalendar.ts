export function useCalendar() {

  function getMonday(date: Date) {
    date = new Date(date);
    const day = date.getDay()
    const diff = date.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
    return new Date(date.setDate(diff));
  }

  function endOfWeek(date: Date) {
    const lastDay = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.getFullYear(), date.getMonth(), lastDay);
  }

  function startOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  function endOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  function addDays(start_date:Date, days: number) {
    const date = new Date(start_date);
    date.setDate(date.getDate() + days);
    return date;
  }

  function isSameMonth(day: Date, monthStart: Date) {
    return day.getMonth() === monthStart.getMonth() && day.getFullYear() === monthStart.getFullYear()
  }

  function isSameDay(day: Date, selectedDay: Date) {
    return day.getMonth() === selectedDay.getMonth() && day.getFullYear() === selectedDay.getFullYear() && day.getDate() === selectedDay.getDate()
  }

  return {getMonday, endOfMonth, startOfMonth, endOfWeek, addDays, isSameDay, isSameMonth}
}
