import {DefaultParams} from "../../default-types/defaultParams";

export interface TabItemProps {
  label: string;
  badge?: number,
  key: string | number;
}

export interface TabsProps extends DefaultParams{

  items: TabItemProps[];

  /** Size of the tabs */
  size?: "small" | "medium" | "large";
}
