import React from "react";
import Icon from "../icon/icon";
import {DefaultParams} from "../../default-types/defaultParams";
import {ClickableObjectMini} from "../../default-types/ClickableObjectMini";

export interface InputProps extends DefaultParams, ClickableObjectMini{

  /** Position of the icon, valid values are "left", "right". */
  iconPosition?: 'left' | 'right';

  /** Icon object */
  icon?: React.ReactNode<Icon>;

  /** Size of the input */
  size?: "small" | "medium" | "large";

  /** If true, the input will be disabled */
  disabled?: boolean;

  /** Identifier of the component */
  id?: string;

  /** Name of input filed */
  name?: string;

  /** Specifies a short hint that describes the expected value of an input field */
  value?: string | number;

  /** Specifies a short hint that describes the expected value of an input field */
  placeholder?: string;

  /** On change action */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** On key up action */
  onKeyUp?: (event: React.KeyboardEvent<HTMLElement>) => void;

  /** Specifies that an input field must be filled out before submitting the form. */
  isRequired?: boolean;

  /** When present, it specifies that the component cannot be edited */
  readonly?: boolean;

  /** Specifies the type of component. */
  type?: string;

  /** Specifies the maximum number of characters allowed in an input field. */
  maxLength?: number;

  /** Specifies the minimum value of component. */
  min?: string | number;

  /** Specifies the maximum value of component. */
  max?: string | number;

  /** Index of the element in tabbing order */
  tabIndex?: number
}
