import React from "react";
import Icon from "../icon/icon";
import {DefaultParams} from "../../default-types/defaultParams";

export interface DropdownItem {
  label: string;
  disabled?: boolean;
  key: string | number;
  icon?: React.ReactNode;
}

export interface DropdownProps extends DefaultParams{

  items: DropdownItem[];

  /** Icon object */
  icon?: React.ReactNode<Icon>;

  /** Size of the button */
  size?: "small" | "medium" | "large";

  /** If true, the button will be disabled */
  disabled?: boolean;

  /** The default selected key */
  defaultSelectedKey?: string | number;

  /** On change event */
  onChange?: (item: { key: string | number, clickEvent:React.MouseEvent<HTMLElement> }) => void;
}
