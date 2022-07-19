import {NavigationProps} from "./NavigationProps";
import {useMemo, useState} from "react";

export interface useNavigationProps{
  showIcons: boolean;
  activeItem: string | number;
  setActiveItem: (item: string | number) => void;
}

export function useNavigation(props: NavigationProps):useNavigationProps {
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

  return {showIcons,activeItem,setActiveItem};
}
