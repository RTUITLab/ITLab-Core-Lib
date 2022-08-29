import {NavigationItem, NavigationProps} from "./NavigationProps";
import {useNavigationProps} from "./useNavigation";
import React, {createRef, useCallback, useEffect, useMemo, useState} from 'react'
import styles from "./navigation.module.scss";

export function useMenuItem(localProps: { item: NavigationItem; props: NavigationProps; state: useNavigationProps }) {
  const [contentItemClasses, setContentItemClasses] = useState<Array<string>>([styles['navigation-item-content']]);
  const {item, props, state} = localProps;
  const submenu = createRef<HTMLDivElement>();
  const [submenuHeight, setSubmenuHeight] = useState(0)
  const [submenuDisplay, setSubmenuDisplay] = useState("block")
  const [defaultSubmenuHeight, setDefaultSubmenuHeight] = useState(0)

  const menuItemManager = useMemo(() => {
    return {
      push: (className: string) => {
        setContentItemClasses(prevState => {
          return [...prevState, className]
        });
      }, remove: (className: string) => {
        setContentItemClasses((prevState) => {
          return prevState.filter((c: string) => c !== className)
        });
      }, get: () => {
        return contentItemClasses;
      }
    }
  }, [])

  const calculateDefaultSubmenuHeight = useCallback((children: Element[]) => {
    setDefaultSubmenuHeight(children.reduce((acc, child) => acc + child.clientHeight, 0))
  }, [])

  const initItems = useCallback(() => {
    if (submenu.current) {
      if (props.defaultOpenedItems?.includes(item.key) && props.type !== "horizontal") {
        const children = Array.from(submenu.current.children)
        const height = children.reduce((acc, child) => acc + child.clientHeight, 0)
        openItem(height)
      }else{
        closeItem()
      }
      if (props.defaultSelectedKey) {
        if (item.list) {
          if (item.list.map((e) => e.key).includes(props.defaultSelectedKey)) {
            submenuClick(props.defaultSelectedKey)
          }
        }
        if (item.sections) {
          if (item.sections.map((e) => e.items.map((k) => k.key)).some((e) => {
            if (props.defaultSelectedKey) return e.includes(props.defaultSelectedKey)
            return false
          })) {
            submenuClick(props.defaultSelectedKey)
          }
        }
      }
    }
  }, [item, props, submenu])

  useEffect(() => {
    if (!submenu.current) {
      setDefaultSubmenuHeight(0)
      return;
    }

    setSubmenuDisplay("block")
    const children = Array.from(submenu.current.children);
    Promise.resolve().then(() => {
      calculateDefaultSubmenuHeight(children);

      if (!state.showIcons) {
        menuItemManager.push(styles['navigation-item-content-without-first-icon'])
      }

      initItems();
    })
  }, [props]);

  useEffect(() => {
    if (props.type === "horizontal" && state.lastOpenedItem !== item.key && submenu.current) {
      closeItem();
    }
  }, [state.lastOpenedItem])

  useEffect(() => {
    initItems();
  }, [])

  useEffect(() => {
    if (state.activeItem === item.key) {
      menuItemManager.push(styles['navigation-item-content-active'])
    } else {
      menuItemManager.remove(styles['navigation-item-content-active'])
    }
  }, [state.activeItem])

  const closeItem = useCallback(() => {
    menuItemManager.remove(styles['navigation-item-content-open']);
    setSubmenuHeight(0)
    setTimeout(() => {
      setSubmenuDisplay("none")
    }, 150)
  }, [menuItemManager])

  const openItem = useCallback((height?: number) => {
    state.setLastOpenedItem(item.key);
    setSubmenuDisplay("block")

    /* эти действия запустятся после изменения предыдущего состояния */
    setTimeout(() => {
      setSubmenuHeight(height || defaultSubmenuHeight);
      menuItemManager.push(styles['navigation-item-content-open']);
    }, 2)
  }, [menuItemManager, state, item, defaultSubmenuHeight])

  const onMenuClick = useCallback(async () => {
    if (contentItemClasses.includes(styles['navigation-item-content-open'])) {
      closeItem();
    } else {
      openItem();
    }
  }, [contentItemClasses, openItem, closeItem])

  const submenuClick = useCallback((key: string | number, e?: React.MouseEvent<HTMLElement>) => {
    state.setActiveMenuItem(key);
    state.setActiveItem(item.key);
    if (props.type === "horizontal") {
      closeItem();
    }
    if (props.onChange && e) {
      props.onChange({key: key, clickEvent: e});
    }
  }, [state, props, item, closeItem])

  return {
    contentItemClasses,
    item,
    props,
    state,
    submenu,
    submenuHeight,
    submenuDisplay,
    onMenuClick,
    closeItem,
    openItem,
    submenuClick,
  };
}
