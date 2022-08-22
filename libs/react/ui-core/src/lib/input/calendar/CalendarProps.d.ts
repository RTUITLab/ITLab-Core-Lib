import {DefaultParams} from "../../default-types/defaultParams";

export interface CalendarProps extends DefaultParams{

  /** Select date event */
  onSelectDate: (date: Date | string) => void;

  /** Set displayed month */
  setCurrentMonth: (currentMonth: Date) => void;

  /** Displayed month */
  currentMonth: Date

  /** Selected day */
  selectedDate: Date
}
