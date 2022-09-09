import {NavigationItem, NavigationProps} from "./NavigationProps";
import {useNavigationProps} from './useNavigationProps'
import React, {RefObject, useCallback, useEffect, useMemo, useState} from 'react'
import styles from "./navigation.module.scss";

export function useMenuItem(localProps: { item: NavigationItem; props: NavigationProps; state: useNavigationProps,
  expanded: boolean, contentRef: RefObject<HTMLDivElement>, toggleExpanded: () => void }) {
  const [contentItemClasses, setContentItemClasses] = useState<Array<string>>([styles['navigation-item-content']]);
  const {item, props, state, contentRef, expanded, toggleExpanded} = localProps;

  const menuItemManager = useMemo(() => {
    return {
      push: (className: string) => {
        setContentItemClasses(prevState => {
          return [...prevState, className]
        });
      },
      remove: (className: string) => {
        setContentItemClasses((prevState) => {
          return prevState.filter((c: string) => c !== className)
        });
      },
      get: () => {
        return contentItemClasses;
      }
    }
  }, [])

  const initItems = useCallback(() => {
    if (contentRef?.current) {
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
  }, [item, props, contentRef])

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

  useEffect(() => {
    if(expanded) {
      state.setLastOpenedItem(item.key);
      setTimeout(() => {
        menuItemManager.push(styles['navigation-item-content-open']);
      }, 2)
    }
    else menuItemManager.remove(styles['navigation-item-content-open']);
  }, [expanded, item, menuItemManager, state])

  const submenuClick = useCallback((key: string | number, e?: React.MouseEvent<HTMLElement>) => {
    state.setActiveMenuItem(key);
    state.setActiveItem(item.key);
    if(props.type === 'horizontal' && expanded) toggleExpanded()
    if (props.onChange && e) {
      props.onChange({key: key, clickEvent: e});
    }
  }, [state, props, item])

  return {
    contentItemClasses,
    item,
    props,
    state,
    submenuClick,
  };
}
