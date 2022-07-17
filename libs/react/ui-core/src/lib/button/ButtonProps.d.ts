import React from "react";
import Icon from "../icon/icon";
import {ClickableObject} from "../../default-types/ClickableObject";
import {DefaultParams} from "../../default-types/defaultParams";

export interface ButtonProps extends ClickableObject, DefaultParams{

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
