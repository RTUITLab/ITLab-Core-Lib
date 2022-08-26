export type CalendarCellsType = {
  currentMonth: Date
  selectedDate: Date
  endDate?: Date
  onDateClick: (day: Date) => void
}
