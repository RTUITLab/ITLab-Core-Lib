import {DefaultParams} from "../../default-types/defaultParams";

export interface CheckboxProps extends DefaultParams {

  /** Label of the checkbox */
  label?: string;

  /** Name of the checkbox group */
  name?: string;

  isRequired?: boolean;

  readonly?: boolean;

  checked?: boolean;

  /** When present, it specifies that the element should be disabled */
  disabled?: boolean;

  /** Identifier of the focus input to match a label defined for the component */
  inputId?: string;

  value?: any;

  /** Index of the element in tabbing order */
  tabIndex?: number;

  /** Used to define a string that labels the input element *
  ariaLabel?: string;

  /** Establishes relationships between the component and label(s) where its value should be one or more element IDs */
  ariaLabelledBy?: string;

  /** Style class of the label */
  labelStyleClass?: string | string[];
}
