import {NavigationProps} from "./NavigationProps";
import {useMemo, useState} from "react";
import {useNavigationProps} from './useNavigationProps'

export function useNavigation(props: NavigationProps):useNavigationProps {
  const [activeMenuItem, setActiveMenuItem] = useState<string | number>(0);
  const [lastOpenedItem, setLastOpenedItem] = useState<string | number>(0);
  const [activeItem, setActiveItem] = useState<string | number>(0);

  // for each item in props
  const showIcons = useMemo(() => {
    let show = true
    props.items.forEach(item => {
      if (!item.icon) {
        show = false;
      }
    })
    return show;
  }, [props.items]);

  return {showIcons,activeMenuItem,setActiveMenuItem,lastOpenedItem,setLastOpenedItem,activeItem,setActiveItem};
}
