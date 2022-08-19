import styles from './radio.module.scss'
import React, {forwardRef, useContext} from 'react'
import {useRadio} from './useRadio'
import {RadioProps} from './RadioProps'
import { RadioGroupContext } from '../radio-group/RadioGroupContext';

/**
 * Radio component
 */

export const Radio=forwardRef((props: RadioProps, ref: any) => {
  const {value, onChange, name, isRequired, readonly, disabled} = useContext(RadioGroupContext)
  const {classes, focused,  handleFocus, labelStyleClass, containerClasses} = useRadio(props, disabled, readonly);
  const icon = <><span className={'ri-checkbox-blank-circle-fill'} style={{fontSize: "8px"}} /></>

  return (
    <label htmlFor={props.inputId || props.value} className={containerClasses} style={props.style}>
    <div className={styles['radio-hidden-input']}>
      <input ref={ref}
             type='radio'
             id={props.inputId || props.value}
             value={props.value}
             checked={value === props.value}
             disabled={(disabled !== undefined && disabled)}
             readOnly={(readonly !== undefined && readonly)}
             name={name}
             required={isRequired}
             tabIndex={props.tabIndex}
             aria-labelledby={props.ariaLabelledBy}
             aria-label={props.ariaLabel}
             aria-checked={value === props.value}
             onFocus={() => handleFocus(true)}
             onBlur={() => handleFocus(false)}
             onChange={!readonly ? onChange : undefined}
             onKeyUp={props.onKeyUp}
      />
    </div>
    <div className={`${classes} ${value === props.value ? styles['radio-checked'] : ''} ${focused ? styles['radio-focus'] : ''}`}>
      {value === props.value && icon}
    </div>
    <label htmlFor={props.inputId || props.value} className={labelStyleClass}>
      {props.label}
    </label>
  </label>

  );
});
