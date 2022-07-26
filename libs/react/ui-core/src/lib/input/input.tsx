import React, {forwardRef} from 'react'
import './input.scss';
import {InputProps} from './InputProps'
import {useInput} from './useInput'

export const Input = forwardRef((props: InputProps, ref: any) => {
  const {classes, iconClasses, focused, handleFocus, handleBlur, events, hovered, handleHover} = useInput(props)

  const icon = <>{props.icon &&
    <span className={iconClasses}>
      {props.icon}
    </span>}
  </>


  return (
    <label className={`${classes} ${hovered && 'input-wrapper-hover'} ${focused && 'input-wrapper-focused'}`} style={props.style}
           onMouseEnter={() => handleHover(true)}
           onMouseLeave={() => handleHover(false)}
    >
      <input className={'input'}
             ref={ref}
             {...events}
             autoFocus={props.autoFocus}
             disabled={(props.disabled !== undefined && props.disabled)}
             value={props.value}
             placeholder={props.placeholder}
             name={props.name}
             id={props.id}
             required={props.isRequired}
             readOnly={props.readonly}
             type={props.type || 'text'}
             maxLength={props.maxLength}
             min={props.min}
             max={props.max}
             tabIndex={props.tabIndex}
             onKeyUp={props.onKeyUp}
             onChange={props.onChange}
             onFocus={() => handleFocus(true)}
             onBlur={(event) => handleBlur(event, false)}
      />
      {icon}
    </label>
  );
});

export default Input;
