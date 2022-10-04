import {DefaultParams} from '../../default-types/defaultParams'
import {ClickableObjectMini} from '../../default-types/ClickableObjectMini'
import {BadgeProps} from '../badge/BadgeProps'
import React from 'react'

export interface TagProps extends DefaultParams, ClickableObjectMini, BadgeProps{

  /** Maximum length of tag */
  maxLength?: number;

  /** Text or other content on Tooltip */
  tooltipCrossContent?: React.ReactNode;

  /** The position of Tooltip */
  tooltipPosition?: "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left-top" | "left-bottom" | "right-top" | "right-bottom";
}
