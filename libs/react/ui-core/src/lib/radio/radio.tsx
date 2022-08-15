import styles from './radio.module.scss'
import React, {forwardRef} from 'react'
import {useRadio} from './useRadio'
import {RadioProps} from './RadioProps'

/**
 * Radio component
 */

export const Radio=forwardRef((props: RadioProps, ref: any) => {
  const {classes, focused,  handleFocus, labelStyleClass, containerClasses} = useRadio(props);

  const icon = <>{props.radioIcon ? <span className={'radio-icon'}>{props.radioIcon}</span> : <span className={'ri-checkbox-blank-circle-fill'} style={{fontSize: "8px"}} />}</>

  return (
    <label htmlFor={props.inputId || props.value} className={containerClasses} style={props.style}>
      <div className={styles['radio-hidden-input']}>
        <input ref={ref}
               type='radio'
               id={props.inputId || props.value}
               value={props.value}
               checked={props.checked}
               disabled={(props.disabled !== undefined && props.disabled)}
               readOnly={(props.readonly !== undefined && props.readonly)}
               name={props.name}
               required={props.isRequired}
               tabIndex={props.tabIndex}
               aria-labelledby={props.ariaLabelledBy}
               aria-label={props.ariaLabel}
               aria-checked={props.checked}
               onFocus={() => handleFocus(true)}
               onBlur={() => handleFocus(false)}
               onChange={!props.readonly ? props.onChange : undefined}
               onKeyUp={props.onKeyUp}
        />
      </div>
      <div className={`${props.checked && styles['radio-checked']} ${focused && styles['radio-focus']} ${classes}`}>
        {props.checked && icon}
      </div>
      <label htmlFor={props.inputId || props.value} className={labelStyleClass}>
        {props.label}
      </label>
    </label>
  );
});
