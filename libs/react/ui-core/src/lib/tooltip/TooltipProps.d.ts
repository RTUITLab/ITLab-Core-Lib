import React from "react";

export interface TooltipProps {

  /** The position of Tooltip */
  position?: "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left-top" | "left-bottom" | "right-top" | "right-bottom";

  /** Element that needs to be wrapped in a tooltip */
  children: React.ReactNode;

  /** Hide tooltip */
  hidden?: boolean;

  /** Style properties */
  style?: React.CSSProperties;

  /** Text or other content on Tooltip */
  tooltipContent: React.ReactNode;

  /** Type of tooltip content */
  type?: "interactive" | "meta" | "default";

  /** Confirm button text */
  confirmButtonText?: string;

  /** on confirm button action */
  onConfirm?: () => void;

  /** Cancel button text */
  cancelButtonText?: string;

  /** On cancel button action */
  onCancel?: () => void;

  /** Meta content title */
  metaTitle?: string;

  /** Meta content description */
  metaDescription?: string;
}
