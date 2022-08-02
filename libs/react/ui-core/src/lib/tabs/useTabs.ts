import {useMemo, useState} from 'react'
import {TabsProps} from "./TabsProps";
import styles from './tabs.module.scss'

/**
 * Hook for Tabs
 */
export interface useTabsProps{
  itemClasses: string,
  activeItem: string | number;
  setActiveItem: (item: string | number) => void;
}

export function useTabs(props:TabsProps):useTabsProps {
  const [activeItem, setActiveItem] = useState<string | number>(props.activeItem || '');

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

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props]);

  return {activeItem, setActiveItem, itemClasses}
}
