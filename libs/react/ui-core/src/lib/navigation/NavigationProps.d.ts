import React from "react";

export interface NavigationLabel {
  label: string;
  disabled?: boolean;
  key: string | number;
}

export interface NavigationItemSection {
  title: string;
  items: NavigationLabel[];
}

export interface NavigationItem {
  label: string;
  disabled?: boolean;
  key: string | number;
  icon?: React.ReactNode;
  list?: NavigationLabel[];
  sections?: NavigationItemSection[];
}

export interface NavigationProps {
  /** The items to display in the navigation
   *
   * NavigationItem {<br/>
   *   &nbsp;&nbsp;label: string;<br/>
   *   &nbsp;&nbsp;disabled?: boolean;<br/>
   *   &nbsp;&nbsp;key: string | number;<br/>
   *   &nbsp;&nbsp;icon?: React.ReactNode<Icon>;<br/>
   *   &nbsp;&nbsp;list?: NavigationLabel[];<br/>
   *   &nbsp;&nbsp;sections?: NavigationItemSection[];<br/>
   * }
   *
   * NavigationItemSection {<br/>
   *   &nbsp;&nbsp;title: string;<br/>
   *   &nbsp;&nbsp;items: NavigationLabel[];<br/>
   * }
   *
   * NavigationLabel {<br/>
   *   &nbsp;&nbsp;label: string;<br/>
   *   &nbsp;&nbsp;disabled?: boolean;<br/>
   *   &nbsp;&nbsp;key: string | number;<br/>
   * }
   *
   * */
  items: NavigationItem[];

  /** Type of navigation */
  type?: "horizontal" | "vertical";

  /** The array of default opened items */
  defaultOpenedItems?: Array<string | number>;

  /** The default selected key */
  defaultSelectedKey?: string | number;

  /** On change action */
  onChange?: (item: { key: string | number, clickEvent:React.MouseEvent<HTMLElement> }) => void;
}
