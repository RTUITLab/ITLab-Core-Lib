import React, {useCallback, useMemo, useState} from 'react'
import {TabsProps} from "./TabsProps";
import styles from './tabs.module.scss'
import {getClasses} from '../../utils/getClasses'

/**
 * Hook for Tabs
 */
export interface useTabsProps{
  itemClasses: string,
  classes: string,
  activeItem: string | number;
  handleClick: (key: string | number, clickEvent: React.MouseEvent<HTMLElement>) => void;
}

export function useTabs(props:TabsProps):useTabsProps {
  const [activeItem, setActiveItem] = useState<string | number>(props.defaultActiveItem || '');

  const handleClick = useCallback((key: string | number, clickEvent: React.MouseEvent<HTMLElement>) => {
    setActiveItem(key)
    if(props.onChange && key !== activeItem) {
      props.onChange({key, clickEvent})
    }
  }, [props, activeItem])

  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "tabs": true,
      "tabs-small": props.size === 'small',
      "tabs-medium": props.size === 'medium'|| !props.size,
      "tabs-large": props.size === 'large',
    };
    return getClasses(conditions, styles, props.className)
  }, [props]);

  const itemClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "tab-item": true,
      "tab-item-small": props.size === 'small',
      "tab-item-medium": props.size === 'medium' || !props.size,
      "tab-item-large": props.size === 'large',
    };
    return getClasses(conditions, styles, props.itemStyleClass)
  }, [props]);

  return {activeItem, handleClick, classes, itemClasses}
}
