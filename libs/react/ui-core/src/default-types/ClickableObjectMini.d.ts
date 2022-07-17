import React from "react";

export interface ClickableObjectMini {
  /** On click event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On hover event */
  onHover?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On focus event */
  onFocus?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On blur event */
  onBlur?: (event: React.MouseEvent<HTMLElement>) => void;
}
