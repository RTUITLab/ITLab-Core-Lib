import './checkbox.scss'
import React, {forwardRef} from 'react'
import {useCheckbox} from './useCheckbox'
import {CheckboxProps} from './CheckboxProps'

/**
 * Checkbox component
 */

export const Checkbox=forwardRef((props: CheckboxProps, ref: any) => {
  const {classes, checked, handleCheck, focused, handleBlur, handleFocus, labelStyleClass} = useCheckbox(props);

  return (
    <div  className={'checkbox'} style={props.style}>
      <div className={'checkbox-hidden-input'}>
        <input ref={ref} type='checkbox'
               id={props.inputId}
               value={props.value}
               checked={checked}
               readOnly={props.readonly}
               name={props.name}
               required={props.isRequired}
               tabIndex={props.tabIndex}
               aria-labelledby={props.ariaLabelledBy}
               aria-label={props.ariaLabel}
               aria-checked={props.checked}
               onFocus={() => handleFocus(true)}
               onBlur={() => handleBlur(false)}
               disabled={(props.disabled !== undefined && props.disabled)} onChange={(e) => handleCheck(e.target.checked)} />
      </div>
      <div onClick={() => handleCheck(checked)} className={`${checked && 'checkbox-checked'} ${focused && 'checkbox-focus'} ${classes}`}><span className={`checkbox-icon ${checked && 'ri-check-line'}`}></span></div>
      <label onClick={() => handleCheck(checked)} htmlFor={props.inputId} className={labelStyleClass}>{props.label}</label>
    </div>
  );
});

