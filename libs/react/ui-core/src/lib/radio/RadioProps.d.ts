import {DefaultParams} from "../../default-types/defaultParams";
import React from 'react'

export interface RadioProps extends DefaultParams {

  /** Label of the radio */
  label?: string;

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

  /** onKeyUp event */
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
