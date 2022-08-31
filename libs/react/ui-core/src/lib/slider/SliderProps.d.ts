import {DefaultParams} from '../../default-types/defaultParams'

export interface SliderProps extends DefaultParams {

  /** Specifies the type of the element */
  range?: boolean;

  /** If true, input-number component will be showed */
  showInput?: boolean;

  /** Default value of the slider */
  defaultValue?: number | [number, number];

  /** On change event */
  onChange?: (value: number) => void;

  /** Specifies the minimum value of component */
  min?: number;

  /** Specifies the maximum value of component */
  max?: number;
}
