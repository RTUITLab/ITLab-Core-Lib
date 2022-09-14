import React from "react";
import Icon from "../icon/icon";
import {DefaultParams} from "../../default-types/defaultParams";

export interface DropdownItemProps {
  label: string;
  key: string | number;
  disabled?: boolean;
}

export interface DropdownProps extends DefaultParams{
  /** The items to display in the dropdown
   *
   * DropdownItemProps {<br/>
   *   &nbsp;&nbsp;label: string;<br/>
   *   &nbsp;&nbsp;key: string | number;<br/>
   *   &nbsp;&nbsp;disabled?: boolean;<br/>
   * }
   *
   * */
  items: DropdownItemProps[];

  /** Icon object */
  icon?: React.ReactNode<Icon>;

  /** Size of the dropdown */
  size?: "small" | "medium" | "large";

  /** If true, the dropdown will be disabled */
  disabled?: boolean;

  /** If true, the dropdown will be error */
  error?: boolean;

  /** Text of the dropdown error */
  errorText?: string;

  /** The default selected key */
  defaultSelectedKey?: string | number;

  /** If true, the dropdown will be open */
  defaultOpen?: boolean;

  /** On select event */
  onSelect?: (item: {label: string, key: string | number, event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> }) => void;

  /** On close event */
  onClose?: () => void;

  /** On open event */
  onOpen?: () => void;

  /** Style class of the dropdown item */
  itemClass?: string | string[];

  /** Inline style of the dropdown item */
  itemStyle?: object;
}
