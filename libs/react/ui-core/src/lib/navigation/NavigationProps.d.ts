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
  icon?: React.ReactNode;
  list?: NavigationLabel[];
  sections?: NavigationItemSection[];
}

export interface NavigationProps {
  items: NavigationItem[];
  type?: "horizontal" | "vertical";
  onChange?: (item: { key: string | number, clickEvent:React.MouseEvent<HTMLElement> }) => void;
}
