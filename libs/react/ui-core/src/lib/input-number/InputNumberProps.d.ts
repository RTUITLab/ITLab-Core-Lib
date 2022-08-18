import React from "react";
import {DefaultParams} from "../../default-types/defaultParams";

export interface InputNumberProps extends DefaultParams{

  /** If true, the input will be disabled */
  disabled?: boolean;

  /** Identifier of the component */
  id: string;

  /** Name of input filed */
  name?: string;

  /** Step of input field */
  step?: number;

  /** Specifies the default value of input field */
  defaultValue?: number

  /** Specifies a short hint that describes the expected value of an input field */
  placeholder?: string;

  /** On change action */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** On key up action */
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /** On click event */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;

  /** On focus event */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /** On blur event */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /** Specifies that an input field must be filled out before submitting the form */
  isRequired?: boolean;

  /** When present, it specifies that the component cannot be edited */
  readonly?: boolean;

  /** When present, it specifies that the component should automatically get focus */
  autoFocus?: boolean;

  /** Specifies the minimum value of component */
  min?: string | number;

  /** Specifies the maximum value of component */
  max?: string | number;

  /** Index of the element in tabbing order */
  tabIndex?: number
}
