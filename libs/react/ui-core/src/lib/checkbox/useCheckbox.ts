import React, {useCallback, useMemo, useState} from 'react'
import styles from './checkbox.module.scss'
import {CheckboxProps} from './CheckboxProps'
import {getClasses} from '../../utils/getClasses'

/**
 * Hook for checkbox
 */
export function useCheckbox(props: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(props.defaultChecked || false)
  const [focused, setFocused] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(props.error || false)

  const handleCheck = useCallback((checked: boolean) => {
    if(!props.readonly && !props.disabled) {
      setChecked(!checked)
      setIsError(false)
    }
  }, [props])

  const handleFocus = useCallback((focused: boolean) => {
    setFocused(focused)
  }, [])

  const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if((e.code === 'Space' || e.code === 'Enter') && !props.readonly && !props.disabled) {
      setChecked(!checked)
    }
  }, [checked, props])

  const containerClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "checkbox": true,
      "checkbox-disabled": Boolean(props.disabled),
      "checkbox-readonly": Boolean(props.readonly),
    };
    return getClasses(conditions, styles);
  }, [props]);

  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "checkbox-box": true,
      "checkbox-disabled": Boolean(props.disabled),
      "checkbox-readonly": Boolean(props.readonly),
      "checkbox-checked": checked,
      "checkbox-focus": focused,
      "checkbox-invalid": isError,
    };
    return getClasses(conditions, styles, props.className)
  }, [props, checked, focused, isError]);

  const labelStyleClass = useMemo(() => {
    return getClasses({'checkbox-label': true}, styles, props.labelStyleClass)
  }, [props]);

  return {classes, containerClasses, labelStyleClass, checked, handleCheck, handleKeyUp, focused, handleFocus, isError}
}
