import {DefaultParams} from "../../default-types/defaultParams";
import React from 'react'

export interface TabItemProps {
  label: string;
  badge?: number,
  key: string | number;
}

export interface TabsProps extends DefaultParams{

  /** The items to display in the tabs
   * TabItemProps{<br/>
   *   &nbsp;&nbsp;label: string;<br/>
   *   &nbsp;&nbsp;badge?: number;<br/>
   *   &nbsp;&nbsp;key: string | number;<br/>
   * }
   * */
  items: TabItemProps[];

  /** Size of the tabs */
  size?: "small" | "medium" | "large";

  /** Initial active item key */
  defaultActiveItem?: string | number

  /** Style class of the tab item */
  itemStyleClass?: string | string[]

  /** Max count to show */
  overflowCount?: number

  /** On change event */
  onChange?: (item: {key: string | number, clickEvent: React.MouseEvent<HTMLElement>}) => void
}
