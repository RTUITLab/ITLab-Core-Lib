import React from "react";

export interface AvatarProps {
  /** Text or Icon component */
  children?: string | React.ReactNode;

  /** Avatar size */
  size?: 120 | 96 | 72 | 48 | 36 | 24;

  /** Avatar color */
  color?: "primary" | "green" | "red" | "general";
}
