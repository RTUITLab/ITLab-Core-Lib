import React, {createRef, useEffect, useMemo, useState} from 'react'
import {DropdownProps} from "./DropdownProps";
import styles from './dropdown.module.scss'
import {useDropdownProps} from './useDropdownProps'

/**
 * Hook for dropdown
 */
export function useDropdown(props:DropdownProps):useDropdownProps {
  const [activeItemKey, setActiveItemKey] = useState<string | number>(props.defaultSelectedKey || '')
  const [isOpen, setIsOpen] = useState<boolean>(props.defaultOpen || false)
  const list = createRef<HTMLDivElement>();
  const [activeLabel, setActiveLabel] = useState<string | null>(
    props.defaultSelectedKey && props.items.find((item) => item.key === props.defaultSelectedKey)?.label
    || null)
  const icon = (props.icon ? (
    <span className={styles['dropdown-icon']}>
       {typeof props.icon === "string" ? <i className={props.icon}/> : props.icon}
    </span>
  ) : null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleOpen = (isOpen: boolean) => {
    if(!props.disabled && !props.error) {
      setIsOpen(isOpen)
      if(isOpen && props.onOpen) props.onOpen()
      else if(!isOpen && props.onClose) props.onClose()
    }
  }
  const handleKeyUp = (label: string, key: string | number, event: React.KeyboardEvent<HTMLElement>) => {
    if(event.key === 'Space' || event.key === 'Enter') {
      handleSelect(label, key, event)
    }
  }
  const handleSelect = (label: string, key: string | number, event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    if(!props.disabled && !props.error && !props.items.find((item) => item.key === key)?.disabled) {
      setActiveItemKey(key)
      setActiveLabel(label)
      if(props.onSelect) {
        props.onSelect({label, key, event})
      }
    }
  }
  const handleClickOutside = (event: any) => {
    if(isOpen && list.current && !list.current.contains(event.target)) {
      handleOpen(false)
    }
  }
  const containerClasses = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "dropdown-container": true,
      "dropdown-disabled": props.disabled !== undefined && props.disabled,
      "dropdown-error": props.error !== undefined && props.error,
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props]);

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

    if(typeof props.itemClass === 'string') classList.push(props.itemClass);
    if(typeof props.itemClass === 'object') classList.push(...props.itemClass);

    return classList.join(' ');
  }, [props]);

  return {classes, itemClasses, containerClasses, activeItemKey, icon, activeLabel, isOpen, handleOpen, handleSelect, handleKeyUp, list}
}
