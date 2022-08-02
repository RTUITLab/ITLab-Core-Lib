import styles from './radio.module.scss'
import React, {forwardRef} from 'react'
import {useRadio} from './useRadio'
import {RadioProps} from './RadioProps'

/**
 * Checkbox component
 */

export const Radio=forwardRef((props: RadioProps, ref: any) => {
  const {classes, focused,  handleFocus, labelStyleClass} = useRadio(props);

  const icon = <>{props.checkboxIcon ? <span className={'radio-icon'}>{props.checkboxIcon}</span> : <span className={'ri-checkbox-blank-circle-fill'} style={{fontSize: "8px"}} />}</>

  return (
    <div className={styles['radio']} style={props.style}>
      <div className={styles['radio-hidden-input']}>
        <input ref={ref}
               type='radio'
               id={props.value}
               value={props.value}
               defaultChecked={props.defaultChecked}
               checked={props.checked}
               disabled={(props.disabled !== undefined && props.disabled)}
               readOnly={(props.disabled !== undefined && props.readonly)}
               name={props.name}
               required={props.isRequired}
               tabIndex={props.tabIndex}
               aria-labelledby={props.ariaLabelledBy}
               aria-label={props.ariaLabel}
               aria-checked={props.checked}
               onFocus={() => handleFocus(true)}
               onBlur={() => handleFocus(false)}
               onChange={props.onChange}
               onKeyUp={props.onKeyUp}
        />
      </div>
      <label htmlFor={props.value} className={`${props.checked && styles['radio-checked']} ${focused && styles['radio-focus']} ${classes}`}>
        {props.checked && icon}
      </label>
      <label htmlFor={props.value} className={labelStyleClass}>
        {props.label}
      </label>
    </div>
  );
});
