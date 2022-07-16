import React from "react";

export interface ButtonProps {

  /** Text of the button */
  children?: React.ReactNode | string;

  /** Position of the icon, valid values are "left", "right". */
  iconPosition?: 'left' | 'right';

  /** Icon object such as <Icon/> */
  icon?: React.ReactNode;

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

  /** Inline style of the element. */
  style?:object;

  /** Style class of the element */
  className?: string | string[];
}
