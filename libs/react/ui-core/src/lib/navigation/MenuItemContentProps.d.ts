import {NavigationItem} from './NavigationProps'
import React from 'react'

export type MenuItemContentProps = {
  strings: Array<string>,
  onClick: () => Promise<void>,
  item: NavigationItem,
  showIcons: boolean,
  icon: React.ReactNode | string
}
