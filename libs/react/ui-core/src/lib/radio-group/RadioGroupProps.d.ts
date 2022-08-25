import {DefaultParams} from "../../default-types/defaultParams";
import React from 'react'

export interface RadioGroupProps extends DefaultParams {

  /** Children of the radio group */
  children: React.ReactNode

  /** Value of the checked radio element */
  value: string;

  /** onChange event */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  /** When present, it specifies that the component cannot be edited */
  readonly?: boolean;

  /** When present, it specifies that the element should be disabled */
  disabled?: boolean;

  /** Name of the radio group */
  name?: string;

  /** When present, it specifies that radio must be checked before submitting the form */
  isRequired?: boolean;
}
