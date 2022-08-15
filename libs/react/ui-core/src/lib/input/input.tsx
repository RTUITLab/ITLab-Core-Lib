import React, {forwardRef} from 'react'
import styles from './input.module.scss';
import {InputProps} from './InputProps'
import {useInput} from './useInput'

export const Input = forwardRef((props: InputProps, ref: any) => {
  const {classes, iconClasses} = useInput(props)

  const searchIco = <>{props.type === 'search' &&
    <span className={iconClasses}>
      <i className={"ri-search-line"}/>
    </span>
  }</>

  const icon = <>{props.icon ?
    <span className={iconClasses}>
      {props.icon}
    </span> : searchIco}
  </>


  return (
    <>
      <label className={`${classes}`} style={props.style}>
        <input className={styles['input']}
               ref={ref}
               autoFocus={props.autoFocus}
               disabled={(props.disabled !== undefined && props.disabled)}
               value={props.value}
               placeholder={props.placeholder}
               name={props.name}
               id={props.id}
               required={props.isRequired}
               readOnly={props.readonly}
               defaultValue={props.defaultValue}
               type={props.type || 'text'}
               maxLength={props.maxLength}
               pattern={props.pattern}
               min={props.min}
               max={props.max}
               tabIndex={props.tabIndex}
               onClick={props.onClick}
               onKeyUp={props.onKeyUp}
               onChange={props.onChange}
               onFocus={props.onFocus}
               onBlur={props.onBlur}
        />
        {icon}
      </label>
      {(props.error && props.errorText) &&
        <div className={styles['input-text-error']}>
          {props.errorText}
        </div>
      }
    </>
  );
});

export default Input;
