import React, {forwardRef, useMemo} from 'react'
import './input.scss';
import {InputProps} from './InputProps'
import {useInput} from './useInput'
import {getAllEvents} from '../../utils/getAllEvents'

export const Input = forwardRef((props: InputProps, ref: any) => {
  const {classes, iconClasses, focused, handleFocus, handleBlur, events} = useInput(props)

  const icon = <>{props.icon &&
    <span className={iconClasses}>
      {props.icon}
    </span>}
  </>


  return (
    <div className={`${classes} ${focused && 'input-wrapper-focused'}`} style={props.style}>
      <input className={'input'}
             ref={ref}
             {...events}
             disabled={props.disabled}
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
    </div>
  );
});

export default Input;
