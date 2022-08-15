import {DefaultParams} from "../../default-types/defaultParams";
import {ClickableObjectMini} from "../../default-types/ClickableObjectMini";
import {ReactNode} from "react";

export interface CounterProps extends DefaultParams, ClickableObjectMini {

  /** Number to show in badge */
  children: ReactNode | number;

  /** Background */
  type?: "solid" | "outline" | "light";

  /** Customize Counter dot color */
  color?: "primary" | "red" | "green" | "transparent";

  /** Customize Counter size */
  size?: "small" | "medium" | "large";

  /** Max count to show */
  overflowCount?: number;

  /** Text to show when hovering over the counter */
  text?: string;
}
