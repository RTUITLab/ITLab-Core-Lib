import {NavigationItem, NavigationProps} from './NavigationProps'
import {useNavigationProps} from './useNavigation'

export type MenuItemProps = {
  item: NavigationItem,
  props: NavigationProps,
  state: useNavigationProps
}
