import React from "react";
import Icon from "../icon/icon";
import {DefaultParams} from "../../default-types/defaultParams";

type InputTypeEnum = 'text' | 'email' | 'password' | 'search' | 'tel'

export interface InputProps extends DefaultParams{

  /** Position of the icon, valid values are "left", "right" */
  iconPosition?: 'left' | 'right';

  /** Icon object */
  icon?: React.ReactNode<Icon>;

  /** Size of the input */
  size?: "small" | "medium" | "large";

  /** If true, the input will be disabled */
  disabled?: boolean;

  /** If true, the input will be valid */
  valid?: boolean;

  /** If true, the input will be invalid */
  error?: boolean;

  /** Text of the error */
  errorText?: string;

  /** Identifier of the component */
  id?: string;

  /** Name of input filed */
  name?: string;

  /** Value of input field */
  value?: string | number;

  /** Specifies the default value of input field */
  defaultValue?: string | number

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

  /** Specifies the type of component */
  type?: InputTypeEnum;

  /** Specifies the regular expression which the input's value must match */
  pattern?: string;

  /** Specifies the maximum number of characters allowed in an input field */
  maxLength?: number;

  /** Index of the element in tabbing order */
  tabIndex?: number
}
