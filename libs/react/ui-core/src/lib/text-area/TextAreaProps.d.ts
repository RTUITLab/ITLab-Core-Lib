import {DefaultParams} from "../../default-types/defaultParams";
import {ClickableObjectMini} from "../../default-types/ClickableObjectMini";
import React from "react";

export interface TextAreaProps extends DefaultParams, ClickableObjectMini{
  name?: string;
  id?: string;
  defaultValue?: string;
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
