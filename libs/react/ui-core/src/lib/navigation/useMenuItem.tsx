import {NavigationItem, NavigationProps} from "./NavigationProps";
import {useNavigationProps} from "./useNavigation";
import React, {createRef, useEffect, useState} from "react";
import styles from "./navigation.module.scss";

export function useMenuItem(localProps: { item: NavigationItem; props: NavigationProps; state: useNavigationProps }) {
  const [contentItemClasses, setContentItemClasses] = useState<Array<string>>([styles['navigation-item-content']]);
  const {item, props, state} = localProps;
  const submenu = createRef<HTMLDivElement>();
  const [submenuHeight, setSubmenuHeight] = useState(0)
  const [submenuDisplay, setSubmenuDisplay] = useState("block")
  const [defaultSubmenuHeight, setDefaultSubmenuHeight] = useState(0)
  const icon = (
    state.showIcons ? <span className={styles['navigation-item-content-icon']}>
      {typeof item.icon === "string" ? <i className={item.icon}/> : item.icon}
          </span> : null
  )
  const menuItemManager = {
    push: (className: string) => {
      setContentItemClasses([...contentItemClasses, className]);
    }, remove: (className: string) => {
      setContentItemClasses(contentItemClasses.filter((c: string) => c !== className));
    }
  }

  useEffect(() => {
    if (!submenu.current) {
      setDefaultSubmenuHeight(0)
      return;
    }
    const children = Array.from(submenu.current.children);
    setDefaultSubmenuHeight(children.reduce((acc, child) => acc + child.clientHeight, 0))
    setSubmenuDisplay("none")
  }, [props]);

  const onMenuClick = async () => {
    if (contentItemClasses.includes(styles['navigation-item-content-open'])) {
      menuItemManager.remove(styles['navigation-item-content-open']);
      setSubmenuHeight(0)
      setTimeout(() => {
        setSubmenuDisplay("none")
      }, 150)
    } else {
      menuItemManager.push(styles['navigation-item-content-open']);
      setSubmenuDisplay("block")
      setTimeout(() => {
        setSubmenuHeight(defaultSubmenuHeight);
      }, 2)
    }
  }
  return {contentItemClasses, item, props, state, submenu, submenuHeight, submenuDisplay, icon, onMenuClick};
}
