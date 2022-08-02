import {DefaultParams} from "../../default-types/defaultParams";
import React from 'react'
import Icon from '../icon/icon'

export interface RadioProps extends DefaultParams {

  /** Label of the checkbox */
  label?: string;

  /** Name of the checkbox group */
  name?: string;

  /** When present, it specifies that checkbox must be checked before submitting the form */
  isRequired?: boolean;

  /** When present, it specifies that the component cannot be edited */
  readonly?: boolean;

  /** When present, it specifies that the component is already checked */
  defaultChecked?: boolean;

  checked?: boolean;

  /** When present, it specifies that the element should be disabled */
  disabled?: boolean;

  /** When present, it specifies that the component cannot be edited */
  checkboxIcon?: React.ReactNode<Icon>;

  /** Variable which stores value, which used in when checkbox is checked */
  value: string;

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
