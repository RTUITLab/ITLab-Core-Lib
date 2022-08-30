export class CalendarFunctions {
  //Первый день недели
  static getMonday(date: Date) {
    date = new Date(date);
    const day = date.getDay()
    const diff = date.getDate() - day + (day === 0 ? -6:1);
    return new Date(date.setDate(diff));
  }
  //Последний день недели выбранного дня
  static endOfWeek(date: Date) {
    const numberOfDay = date.getDay()
    const lastDay = numberOfDay === 0 ? date.getDate() : (date.getDate() - (date.getDay() - 1) + 6);
    return new Date(date.getFullYear(), date.getMonth(), lastDay);
  }
  //Начало месяца
  static startOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }
  //Последний день месяца
  static endOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }
  //Добавление указанного количества дней к start_date
  static addDays(start_date:Date, days: number) {
    const date = new Date(start_date);
    date.setDate(date.getDate() + days);
    return date;
  }
  //Если месяц такой же, как у выбранного дня
  static isSameMonth(day: Date, monthStart: Date) {
    return day.getMonth() === monthStart.getMonth() && day.getFullYear() === monthStart.getFullYear()
  }
  //Если день такой же, как выбранный
  static isSameDay(day: Date, selectedDay: Date) {
    return day.getMonth() === selectedDay.getMonth() && day.getFullYear() === selectedDay.getFullYear() && day.getDate() === selectedDay.getDate()
  }
  //Получение недели конкретного дня
  static getWeek(day: Date) {
    const janFirst = new Date(day.getFullYear(), 0, 1);
    return Math.ceil((((day.getTime() - janFirst.getTime()) / 86400000) + janFirst.getDay()) / 7);
  }
  //Если неделя такая же как у выбранного дня
  static isSameWeek(day: Date, selectedDate: Date) {
    return this.getWeek(day) === this.getWeek(selectedDate);
  }
  //Если выбранный день - текущий
  static isCurrentDay(day: Date) {
    const currentDay = new Date()
    return day.getMonth() === currentDay.getMonth() && day.getFullYear() === currentDay.getFullYear() && day.getDate() === currentDay.getDate()
  }
  //Строковая дата в традиционном формате
  static getStringDate(day: Date | string) {
    if(day instanceof Date) return day.getFullYear() + '-' + ('0'+(day.getMonth()+1)).slice(-2) + '-' + ('0'+day.getDate()).slice(-2)
    else if (day.length > 2) {
      const dateArray = day.replace(' ', '').split('.')
      if(dateArray.length === 3) return dateArray[2]+'-'+dateArray[1]+'-'+dateArray[0]
      else return day
    }
    else return day
  }
  //Строковая дата в ru формате
  static getLocalStringDate(day: Date| string) {
    if(day instanceof Date) return ('0'+day.getDate()).slice(-2) + '.' + ('0'+(day.getMonth()+1)).slice(-2) + '.' +  day.getFullYear()
    else if (day.length > 2) {
      const dateArray = day.replace(' ', '').split('.')
      if(dateArray.length === 3) return dateArray[0]+'.'+dateArray[1]+'.'+dateArray[2]
      else return day
    }
    else return day
  }
  //Сравнение двух дат без времени
  static compareDates(start: Date, end: Date) {
    //Двойное оборачивание для сброса времени
    return this.getStringDate(this.getStringDate(start)) <= this.getStringDate(this.getStringDate(end))
  }
  //Если входная строка - дата
  static isDate(text: string) {
    const date = new Date(this.getStringDate(text))
    return date instanceof Date && !isNaN(date.valueOf()) && text.length > 2
  }
  //Получения количества дней в месяце полученного дня
  static getCountDays(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }
}
