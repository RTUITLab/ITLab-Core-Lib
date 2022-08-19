import {useMemo, useState} from 'react'
import styles from './radio.module.scss'
import {RadioProps} from './RadioProps'

/**
 * Hook for checkbox
 */
export function useRadio(props: RadioProps) {
  const [focused, setFocused] = useState<boolean>(false)

  const handleFocus = (focused: boolean) => {
    if(!props.disabled && !props.readonly) {
      setFocused(focused)
    }
  }

  const containerClasses = useMemo(() => {
    const classList = [] as string[];

    const conditions:{[index: string]:boolean} = {
      "radio": true,
      "radio-disabled": props.disabled === true,
      "radio-readonly": props.readonly === true,
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
      "radio-box": true,
      "radio-disabled": props.disabled === true,
      "radio-readonly": props.readonly === true,
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
    const classList = [styles['radio-label']];

    const conditions:{[index: string]:boolean} = {
      "radio-disabled": props.disabled === true,
      "radio-readonly": props.readonly === true,
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(typeof props.labelStyleClass === 'string') classList.push(props.labelStyleClass);
    if(typeof props.labelStyleClass === 'object') classList.push(...props.labelStyleClass);

    return classList.join(' ');
  }, [props]);

  return {classes, labelStyleClass, focused, handleFocus, containerClasses}
}
