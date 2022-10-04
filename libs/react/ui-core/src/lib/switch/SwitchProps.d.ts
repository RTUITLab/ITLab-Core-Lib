import {DefaultParams} from '../../default-types/defaultParams'
import {ClickableObjectMini} from '../../default-types/ClickableObjectMini'

export interface SwitchProps extends DefaultParams, ClickableObjectMini {

  /** Size of the switch */
  size?: "small" | "medium";

  /** If true, the switch will be disabled */
  disabled?: boolean;

  /** When present, it specifies that the component is already checked */
  defaultChecked?: boolean;

  /** Identifier of the component */
  id?: string;

  /** On change event */
  onChange?: (checked: boolean) => void;

  /** Label for switch */
  label?: string;

  /** Position of the label */
  labelPosition?: 'left' | 'right';

  /** Style class of the label */
  labelClassName?: string | string[];
}
