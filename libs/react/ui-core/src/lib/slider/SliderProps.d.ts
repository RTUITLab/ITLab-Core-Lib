import {DefaultParams} from '../../default-types/defaultParams'

export interface SliderProps extends DefaultParams {

  /** If true, input-number component will be showed */
  showInput?: boolean;

  /** Default value of the slider */
  defaultValue?: [number] | [number, number];

  /** On change event */
  onChange?: (values: [number] | [number, number]) => void;

  /** Specifies the minimum value of component */
  min?: number;

  /** Specifies the maximum value of component */
  max?: number;

  /** Step of slider */
  step?: number;

  /** Identifier for input-number */
  id?: string;

  onDrag?: (values: number[]) => void;
}
