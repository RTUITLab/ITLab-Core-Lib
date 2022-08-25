import React from "react";
import Icon from "../icon/icon";
import {DefaultParams} from "../../default-types/defaultParams";
import {ClickableObjectMini} from "../../default-types/ClickableObjectMini";

export interface FunctionalButtonProps extends DefaultParams, ClickableObjectMini{

  /** Text of the button */
  children?: React.ReactNode | string;

  /** Position of the icon, valid values are "left", "right". */
  iconPosition?: 'left' | 'right';

  /** Icon object */
  icon?: React.ReactNode<Icon>;

  /** If true, the button will be disabled */
  disabled?: boolean;
}
