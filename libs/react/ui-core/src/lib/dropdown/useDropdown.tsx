import React, {createRef, useCallback, useEffect, useMemo, useState} from 'react'
import {DropdownProps} from "./DropdownProps";
import styles from './dropdown.module.scss'
import {useDropdownProps} from './useDropdownProps'
import {getClasses} from '../../utils/getClasses'

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

  useEffect(() => {
    if(props.defaultSelectedKey) {
      setActiveItemKey(props.defaultSelectedKey)
    }
  }, [props.defaultSelectedKey])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleOpen = useCallback((isOpen: boolean) => {
    if(!props.disabled) {
      setIsOpen(isOpen)
      if(isOpen && props.onOpen) props.onOpen()
      else if(!isOpen && props.onClose) props.onClose()
    }
  }, [props])
  const handleKeyUp = useCallback((label: string, key: string | number, event: React.KeyboardEvent<HTMLElement>) => {
    if(event.key === 'Space' || event.key === 'Enter') {
      handleSelect(label, key, event)
    }
  }, [])
  const handleSelect = useCallback((label: string, key: string | number, event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    if(!props.disabled && !props.items.find((item) => item.key === key)?.disabled) {
      setActiveItemKey(key)
      setActiveLabel(label)
      setIsOpen(false)
      if(props.onSelect) {
        props.onSelect({label, key, event})
      }
    }
  }, [props])
  const handleClickOutside = useCallback((event: any) => {
    if(isOpen && list.current && !list.current.contains(event.target)) {
      handleOpen(false)
    }
  }, [isOpen, list])
  const containerClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "dropdown-container": true,
      "dropdown-disabled": props.disabled !== undefined && props.disabled,
      "dropdown-error": props.error !== undefined && props.error,
    };
    return getClasses(conditions, styles, props.className)
  }, [props]);

  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "dropdown-value": true,
      "dropdown-small": props.size === 'small',
      "dropdown-medium": props.size === 'medium' || !props.size,
      "dropdown-large": props.size === 'large',
    };
    return getClasses(conditions, styles)
  }, [props]);

  const itemClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "dropdown-item": true,
      "dropdown-small": props.size === 'small',
      "dropdown-medium": props.size === 'medium' || !props.size,
      "dropdown-large": props.size === 'large',
    };
    return getClasses(conditions, styles, props.itemClass)
  }, [props]);

  return {classes, itemClasses, containerClasses, activeItemKey, activeLabel, isOpen, handleOpen, handleSelect, handleKeyUp, list}
}
