import React, {useMemo, useState} from 'react'
import styles from './checkbox.module.scss'
import {CheckboxProps} from './CheckboxProps'

/**
 * Hook for checkbox
 */
export function useCheckbox(props: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(props.defaultChecked || false)
  const [focused, setFocused] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(props.error || false)

  const handleCheck = (checked: boolean) => {
    if(!props.readonly && !props.disabled) {
      setChecked(!checked)
      setIsError(false)
    }
  }

  const handleFocus = (focused: boolean) => {
    setFocused(focused)
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if((e.code === 'Space' || e.code === 'Enter') && !props.readonly && !props.disabled) {
      setChecked(!checked)
    }
  }

  const containerClasses = useMemo(() => {
    const classList = [] as string[];

    const conditions:{[index: string]:boolean} = {
      "checkbox": true,
      "checkbox-disabled": props.disabled === true,
      "checkbox-readonly": props.readonly === true,
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    return classList.join(' ');
  }, [props]);

  const classes = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "checkbox-box": true,
      "checkbox-disabled": props.disabled === true,
      "checkbox-readonly": props.readonly === true,
      "checkbox-checked": checked,
      "checkbox-focus": focused,
      "checkbox-invalid": isError,
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props, checked, focused, isError]);

  const labelStyleClass = useMemo(() => {
    const classList = [styles['checkbox-label']];

    if(typeof props.labelStyleClass === 'string') classList.push(props.labelStyleClass);
    if(typeof props.labelStyleClass === 'object') classList.push(...props.labelStyleClass);

    return classList.join(' ');
  }, [props]);

  return {classes, containerClasses, labelStyleClass, checked, handleCheck, handleKeyUp, focused, handleFocus, isError}
}
