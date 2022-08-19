import {DefaultParams} from "../../default-types/defaultParams";
import React from 'react'

export interface RadioProps extends DefaultParams {

  /** Label of the radio */
  label?: string;

  /** Name of the radio group */
  name?: string;

  /** When present, it specifies that radio must be checked before submitting the form */
  isRequired?: boolean;

  /** When present, it specifies that the component cannot be edited */
  readonly?: boolean;

  /** When present, it specifies that the radio is checked */
  checked: boolean;

  /** When present, it specifies that the element should be disabled */
  disabled?: boolean;

  /** [It doesn't change checked state of radio] Variable which stores value, which used in when radio is checked */
  value: string;

  /** Identifier of the focus input to match a label defined for the component */
  inputId?: string

  /** Index of the element in tabbing order */
  tabIndex?: number;

  /** Used to define a string that labels the input element */
  ariaLabel?: string;

  /** Establishes relationships between the component and label(s) where its value should be one or more element IDs */
  ariaLabelledBy?: string;

  /** Style class of the label */
  labelStyleClass?: string | string[];

  /** onChange event */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  /** onKeyUp event */
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
