import React, {useCallback, useEffect, useMemo, useState} from 'react'
import styles from './checkbox.module.scss'
import {CheckboxProps} from './CheckboxProps'
import {getClasses} from '../../utils/getClasses'

/**
 * Hook for checkbox
 */
export function useCheckbox(props: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(props.defaultChecked || false)
  const [isError, setIsError] = useState<boolean>(props.error || false)

  useEffect(() => {
    if(props.defaultChecked) setChecked(props.defaultChecked)
  }, [props.defaultChecked])

  useEffect(() => {
    if(props.error && !checked) {
      setIsError(props.error)
    }
  }, [props.error])

  const handleCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(!props.readonly && !props.disabled) {
      setChecked(e.target.checked)
      if(props.onChange) props.onChange(e)
      setIsError(false)
    }
  }, [props])

  const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if((e.code === 'Space' || e.code === 'Enter') && !props.readonly && !props.disabled) {
      setChecked((e.target as HTMLInputElement).checked)
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
      "checkbox-invalid": isError,
    };
    return getClasses(conditions, styles, props.className)
  }, [props, checked, isError]);

  const labelStyleClass = useMemo(() => {
    return getClasses({'checkbox-label': true}, styles, props.labelStyleClass)
  }, [props]);

  return {classes, containerClasses, labelStyleClass, checked, handleCheck, handleKeyUp, isError}
}
