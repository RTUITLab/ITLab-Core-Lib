import {DefaultParams} from "../../default-types/defaultParams";
import {ClickableObjectMini} from "../../default-types/ClickableObjectMini";
import React from "react";

export interface TextAreaProps extends DefaultParams, ClickableObjectMini{

  /** The name of the element */
  name?: string;

  /** The id of the element */
  id?: string;

  /** The default value of the TextArea */
  defaultValue?: string;

  /** The label of the TextArea */
  label?: string;

  /** The size of the TextArea */
  size?: 'small' | 'medium' | 'large';

  /** The max length of the TextArea */
  maxLength?: number

  /** The placeholder of the TextArea */
  placeholder?: string;

  /** If true, the TextArea will be disabled */
  disabled?: boolean;

  /** When present, it specifies that the component cannot be edited */
  readonly?: boolean;

  /** Specifies that a TextArea field must be filled out before submitting the form */
  isRequired?: boolean;

  /** If true, the TextArea will be valid */
  valid?: boolean;

  /** If true, the TextArea will be invalid */
  error?: boolean;

  /** When present, it specifies that the component should automatically get focus */
  autoFocus?: boolean;

  /** The onChange event */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

  /** The excess length event */
  onError?: () => void

  /** The onKeyDown event */
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>

  /** Axes of possible resize */
  resize?: 'all' | 'vertical' | 'horizontal' | 'none'
}
