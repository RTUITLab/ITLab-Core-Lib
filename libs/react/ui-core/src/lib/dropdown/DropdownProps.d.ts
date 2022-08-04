import React from "react";
import Icon from "../icon/icon";
import {DefaultParams} from "../../default-types/defaultParams";

export interface DropdownItemProps {
  label: string;
  disabled?: boolean;
  key: string | number;
  icon?: React.ReactNode;
}

export interface DropdownProps extends DefaultParams{

  items: DropdownItemProps[];

  /** Icon object */
  icon?: React.ReactNode<Icon>;

  /** Size of the dropdown */
  size?: "small" | "medium" | "large";

  /** If true, the dropdown will be disabled */
  disabled?: boolean;

  /** If true, the dropdown will be error */
  error?: boolean;

  /** The default selected key */
  defaultSelectedKey?: string | number;

  /** If true, the dropdown will be open */
  defaultOpen?: boolean;

  /** On change event */
  onChange?: (item: {label: string, key: string | number, event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> }) => void;
}
