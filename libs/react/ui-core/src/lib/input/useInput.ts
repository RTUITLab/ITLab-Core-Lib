import React, {useMemo, useState} from 'react'
import {InputProps} from './InputProps'
import {getAllEvents} from '../../utils/getAllEvents'

export function useInput(props: InputProps) {
  const [focused, setFocused] = useState<boolean>(false)
  const events=useMemo(() => {
    return getAllEvents(props)
  },[props]);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>, focused: boolean) => {
    if(events['onBlur']) events['onBlur'](event)
    setFocused(focused)
  }

  const handleFocus = (focused: boolean) => {
    setFocused(focused)
  }

  const classes = useMemo(() => {
    const classList = ['input-wrapper'];

    const conditions:{[index: string]:boolean} = {
      "input-icon-left": props.iconPosition === 'left',
      "input-icon-right": props.iconPosition === 'right',
      "input-wrapper-large": props.size === 'large',
      "input-wrapper-small": props.size === 'small',
      "input-wrapper-medium": props.size === 'medium',
      "input-wrapper-disabled": props.disabled === true,
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(key);
      }
    });

    if(!props.iconPosition) classList.push('input-icon-left');
    if(!props.size) classList.push('input-wrapper-medium');

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');

  }, [props]);

  const iconClasses = useMemo(() => {
    const classList = ['input-icon'];

    if(props.iconPosition === 'left') classList.push('input-icon-left');
    if(props.iconPosition === 'right') classList.push('input-icon-right');

    return classList.join(' ');
  }, [props]);

  return {classes, iconClasses, focused, handleBlur, handleFocus, events}
}

