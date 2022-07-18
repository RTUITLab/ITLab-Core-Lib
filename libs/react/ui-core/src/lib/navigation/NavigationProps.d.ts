import React from "react";

export interface NavigationProps {
  items: Array<{
    label: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    list?: Array<{
      label: string;
      disabled?: boolean;
      key: string | number;
    }>;
    sections?: Array<{
      title: string;
      items: Array<{
        label: string;
        disabled?: boolean;
        key: string | number;
      }>;
    }>
  }>;
  onChange?: (item: { label: string; key: string | number }) => void;
}
