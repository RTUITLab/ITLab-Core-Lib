import {DefaultParams} from "../../default-types/defaultParams";

export interface CalendarProps extends DefaultParams{

  /** Select date event */
  onSelectDate: (date: Date) => void;
}
