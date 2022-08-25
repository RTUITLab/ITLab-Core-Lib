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

  /** The size of the TextArea */
  size?: 'small' | 'medium' | 'large';

  /** The placeholder of the TextArea */
  placeholder?: string;

  disabled?: boolean;

  /** The onChange action */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
