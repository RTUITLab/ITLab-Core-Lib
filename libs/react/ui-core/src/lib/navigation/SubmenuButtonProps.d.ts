import React from 'react'
import {NavigationLabel} from './NavigationProps'
import {useNavigationProps} from './useNavigation'

export type SubmenuButtonProps = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void,
  item: NavigationLabel,
  state: useNavigationProps
}
