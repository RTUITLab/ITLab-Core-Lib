import React from "react";
import Icon from "../icon/icon";
import {DefaultParams} from "../../default-types/defaultParams";
import {ClickableObjectMini} from "../../default-types/ClickableObjectMini";

export interface ButtonProps extends DefaultParams, ClickableObjectMini{

  /** Text of the button */
  children?: React.ReactNode | string;

  /** Position of the icon, valid values are "left", "right". */
  iconPosition?: 'left' | 'right';

  /** Icon object */
  icon?: React.ReactNode<Icon>;

  /** Type of the button */
  type?: "solid" | "outline" | "light";

  /** Style Color of the button */
  color?: "primary" | "green" | "red" | "transparent";

  /** Size of the button */
  size?: "small" | "medium" | "large";

  /** If true, the button will be disabled */
  disabled?: boolean;

  /** If true, the button will be loading */
  loading?: boolean;

  /** Loading status icon */
  loadingIcon?: React.ReactNode<Icon>;

}
