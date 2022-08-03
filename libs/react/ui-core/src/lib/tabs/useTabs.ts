import React, {useMemo, useState} from 'react'
import {TabsProps} from "./TabsProps";
import styles from './tabs.module.scss'

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

  const handleClick = (key: string | number, clickEvent: React.MouseEvent<HTMLElement>) => {
    setActiveItem(key)
    if(props.onChange && key !== activeItem) {
      props.onChange({key, clickEvent})
    }
  }

  const classes = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "tabs": true,

      "tabs-small": props.size === 'small',
      "tabs-medium": props.size === 'medium',
      "tabs-large": props.size === 'large',
    };

    if(!props.size) classList.push(styles['tabs-medium']);

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props]);

  const itemClasses = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "tab-item": true,

      "tab-item-small": props.size === 'small',
      "tab-item-medium": props.size === 'medium',
      "tab-item-large": props.size === 'large',
    };

    if(!props.size) classList.push(styles['tab-item-medium']);

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(typeof props.itemStyleClass === 'string') classList.push(props.itemStyleClass);
    if(typeof props.itemStyleClass === 'object') classList.push(...props.itemStyleClass);

    return classList.join(' ');
  }, [props]);

  return {activeItem, handleClick, classes, itemClasses}
}
