import React from "react";

export interface DefaultParams{
  /** Inline style of the element. */
  style?: object;

  /** Style class of the element */
  className?: string | string[];

  /** React ref */
  ref?: React.Ref<any>;
}
