import styles from './checkbox.module.scss'
import React, {forwardRef} from 'react'
import {useCheckbox} from './useCheckbox'
import {CheckboxProps} from './CheckboxProps'

/**
 * Checkbox component
 */

export const Checkbox=forwardRef((props: CheckboxProps, ref: any) => {
  const {classes, containerClasses, checked, handleCheck, focused, handleFocus, handleKeyUp, labelStyleClass, isError} = useCheckbox(props);

  const icon = <>{props.checkboxIcon ? <span className={'checkbox-icon'}>{props.checkboxIcon}</span> : <span className={'checkbox-icon ri-check-line'} />}</>

  return (
    <div onClick={() => handleCheck(checked)} className={containerClasses} style={props.style}>
      <div className={styles['checkbox-hidden-input']}>
        <input ref={ref}
               type='checkbox'
               id={props.inputId}
               value={props.value}
               checked={checked}
               readOnly={props.readonly}
               name={props.name}
               required={props.isRequired}
               tabIndex={props.tabIndex}
               aria-labelledby={props.ariaLabelledBy}
               aria-label={props.ariaLabel}
               aria-checked={checked}
               onFocus={() => handleFocus(true)}
               onBlur={() => handleFocus(false)}
               disabled={(props.disabled !== undefined && props.disabled)}
               onChange={(e) => handleCheck(e.target.checked)}
               onKeyDown={(e) => handleKeyUp(e)}
        />
      </div>
      <div className={`${classes} ${checked ? styles['checkbox-checked'] : ''} ${focused ? styles['checkbox-focus'] : ''} ${isError ? styles['checkbox-invalid'] : ''}`}>
        {checked && icon}
      </div>
      <label htmlFor={props.inputId}
             className={labelStyleClass}>
        {props.label}
      </label>
    </div>
  );
});

