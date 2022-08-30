import React from 'react'

export interface useDropdownProps {
  /** Classes string of the active value */
  classes: string;

  /** Classes string of the item element */
  itemClasses: string;

  /** Classes string of the container */
  containerClasses: string;

  /** Label of active item */
  activeLabel: string | null;

  /** Key of active item */
  activeItemKey: string | number;

  /** If true, the dropdown will be open */
  isOpen: boolean;

  /** Dropdown open handler */
  handleOpen: (isOpen: boolean) => void;

  /** Select item handler */
  handleSelect: (label: string, key: string | number, event: React.MouseEvent<HTMLElement>) => void;

  /** Key up handler */
  handleKeyUp: (label: string, key: string | number, event: React.KeyboardEvent<HTMLElement>) => void;

  /** Local ref of the component */
  list: any;
}
