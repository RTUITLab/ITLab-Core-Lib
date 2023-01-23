import styles from './checkbox.module.scss'
import React, {forwardRef} from 'react'
import {useCheckbox} from './useCheckbox'
import {CheckboxProps} from './CheckboxProps'
import Icon from '../icon/icon'

/**
 * Checkbox component
 */

export const Checkbox=forwardRef((props: CheckboxProps, ref: any) => {
  const {classes, containerClasses, checked, handleCheck, handleKeyUp, labelStyleClass} = useCheckbox(props);

  const CheckboxIcon = React.memo(() => (
    <>{props.checkboxIcon ? props.checkboxIcon : <Icon name={'ri-check-line'} type={'line'} size={16} />}</>
  ))

  return (
    <label className={containerClasses} style={props.style} htmlFor={props.inputId}>
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
               disabled={(props.disabled !== undefined && props.disabled)}
               onChange={handleCheck}
               onKeyDown={(e) => handleKeyUp(e)}
        />
      </div>
      <label className={classes} htmlFor={props.inputId}>
        {checked && <CheckboxIcon />}
      </label>
      <label htmlFor={props.inputId} className={labelStyleClass}>
        {props.label}
      </label>
    </label>
  );
});

