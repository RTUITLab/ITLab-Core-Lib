import React, {useMemo, useState} from 'react'
import {DropdownProps} from "./DropdownProps";
import styles from './dropdown.module.scss'

export interface useDropdownProps{
  classes: string;
  itemClasses: string;
  activeLabel: string | null;
  activeItemKey: string | number;
  icon: React.ReactNode | null;
  isOpen: boolean;
  error: boolean;
  handleOpen: (isOpen: boolean) => void;
  handleSelect: (label: string, key: string | number, event: React.MouseEvent<HTMLElement>) => void;
  handleKeyUp: (label: string, key: string | number, event: React.KeyboardEvent<HTMLElement>) => void;
}
/**
 * Hook for dropdown
 */
export function useDropdown(props:DropdownProps):useDropdownProps {
  const [activeItemKey, setActiveItemKey] = useState<string | number>(props.defaultSelectedKey || '')
  const [error, setError] = useState<boolean>(props.error || false)
  const [isOpen, setIsOpen] = useState<boolean>(props.defaultOpen || false)
  const [activeLabel, setActiveLabel] = useState<string | null>(

    props.defaultSelectedKey && props.items.find((item) => item.key === props.defaultSelectedKey)?.label
    || null)
  const icon = (props.icon ? (
    <span className={styles['dropdown-icon']}>
       {typeof props.icon === "string" ? <i className={props.icon}/> : props.icon}
    </span>
  ) : null)

  const handleOpen = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }
  const handleKeyUp = (label: string, key: string | number, event: React.KeyboardEvent<HTMLElement>) => {
    if(event.key === 'Space' || event.key === 'Enter') {
      handleSelect(label, key, event)
    }
  }
  const handleSelect = (label: string, key: string | number, event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    setActiveItemKey(key)
    setActiveLabel(label)
    if(props.onChange) {
      props.onChange({label, key, event})
    }
  }

  const classes = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "dropdown-value": true,
      "dropdown-small": props.size === 'small',
      "dropdown-medium": props.size === 'medium',
      "dropdown-large": props.size === 'large',
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(!props.size) classList.push(styles['dropdown-medium']);

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props]);

  const itemClasses = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "dropdown-item": true,
      "dropdown-small": props.size === 'small',
      "dropdown-medium": props.size === 'medium',
      "dropdown-large": props.size === 'large',
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(!props.size) classList.push(styles['dropdown-medium']);

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props]);

  return {classes, itemClasses, activeItemKey, icon, activeLabel, isOpen, handleOpen, handleSelect, handleKeyUp, error}
}
