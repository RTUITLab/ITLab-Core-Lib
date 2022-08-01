import React, {forwardRef} from 'react';
import styles from './tooltip.module.scss';
import {useTooltip} from "./useTooltip";

/* eslint-disable-next-line */
export interface TooltipProps {

  /** The position of Tooltip */
  position?: "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left-top" | "left-bottom" | "right-top" | "right-bottom";

  /** Element that needs to be wrapped in a tooltip */
  children: React.ReactNode;
  // show?: boolean;

  /** Style properties */
  style?: React.CSSProperties;

  /** Text or other content on Tooltip */
  tooltipContent: React.ReactNode;
}

export const Tooltip = forwardRef((props: TooltipProps, ref: any) => {
  const {tooltipContent, elem, classes, tooltipStyles, recalculatePosition} = useTooltip(props);

  /**
   * TODO:
   * - Ref (forwardRed)
   * - other tooltips
   * */

  return (
    <div
      className={styles['tooltip']}
      onMouseEnter={recalculatePosition}
      onTouchStart={recalculatePosition}
      ref={elem}
    >
      {props.children}
      <div
        ref={tooltipContent}
        className={classes}
        style={{...props.style, ...tooltipStyles}}>
        {props.tooltipContent}
      </div>
    </div>
  )
})



