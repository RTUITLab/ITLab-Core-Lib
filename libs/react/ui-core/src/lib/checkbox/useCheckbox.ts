import React, {useMemo, useState} from 'react'
import styles from './checkbox.module.scss'
import {CheckboxProps} from './CheckboxProps'

/**
 * Hook for checkbox
 */
export function useCheckbox(props: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(props.defaultChecked || false)
  const [focused, setFocused] = useState<boolean>(false)

  const handleCheck = (checked: boolean) => {
    if(!props.readonly && !props.disabled) {
      setChecked(!checked)
    }
  }

  const handleBlur = (focused: boolean) => {
    setFocused(focused)
  }

  const handleFocus = (focused: boolean) => {
    setFocused(focused)
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if((e.code === 'Space' || e.code === 'Enter') && !props.readonly && !props.disabled) {
      setChecked(!checked)
    }
  }

  const classes = useMemo(() => {
    const classList = ['checkbox-box'];

    const conditions:{[index: string]:boolean} = {
      "checkbox-box": true,
      "checkbox-disabled": props.disabled === true,
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

  const labelStyleClass = useMemo(() => {
    const classList = [styles['checkbox-label']];

    if(typeof props.labelStyleClass === 'string') classList.push(props.labelStyleClass);
    if(typeof props.labelStyleClass === 'object') classList.push(...props.labelStyleClass);

    return classList.join(' ');
  }, [props]);

  return {classes, labelStyleClass, checked, handleCheck, handleKeyUp, focused, handleBlur, handleFocus}
}
