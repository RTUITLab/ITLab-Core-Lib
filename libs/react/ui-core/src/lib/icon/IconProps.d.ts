import {ClickableObjectMini} from "../../default-types/ClickableObjectMini";
import {DefaultParams} from "../../default-types/defaultParams";

export interface IconProps extends DefaultParams, ClickableObjectMini {
  /** Size of the icon (px) */
  size?: number,

  /** Color of the icon */
  color?: "primary" | "general" | "green" | "red" | "yellow" | "orange" | "general-light" | "green-light" | "red-light" | "yellow-light" | "orange-light" | "general-dark" | "green-dark" | "red-dark" | "yellow-dark" | "orange-dark",

  /** Type of the icon */
  type?: "fill" | "line",

  /** Name of the icon from https://remixicon.com/ */
  name: string,
}
