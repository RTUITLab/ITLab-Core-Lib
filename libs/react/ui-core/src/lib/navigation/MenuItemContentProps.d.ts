import {NavigationItem} from './NavigationProps'
import React from 'react'

export type MenuItemContentProps = {
  strings: Array<string>,
  onClick: () => void,
  item: NavigationItem,
  showIcons: boolean,
  icon: React.ReactNode | string
}
