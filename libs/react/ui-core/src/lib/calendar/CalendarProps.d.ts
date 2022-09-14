import {DefaultParams} from "../../default-types/defaultParams";

export interface CalendarProps extends DefaultParams{

  /** Select date event */
  onSelectDate?: (date: string) => void;

  /** Size of the component */
  size?: 'default' | 'small'

  /** Type of the component */
  type: 'date' | 'dateRange'

  /** Default selected date */
  defaultDate?: Date,

  /** Default end of range date */
  defaultEndDate?: Date | '',
}
