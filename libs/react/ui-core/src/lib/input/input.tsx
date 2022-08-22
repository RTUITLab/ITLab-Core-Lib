import React, {forwardRef} from 'react'
import styles from './input.module.scss';
import {InputProps} from './InputProps'
import {useInput} from './useInput'
import {Calendar} from './calendar/calendar'

export const Input = forwardRef((props: InputProps, ref: any) => {
  const {classes, iconClasses, isFocus, handleFocus, calendar, value, handleSelectDate, handleChange, selectedDate} = useInput(props)
  const icons = {search: 'ri-search-line', date: 'ri-calendar-line'}

  const defaultIco =
    <>
      {
        (props.type === 'date' || props.type === 'search') &&
        <span className={iconClasses}>
        <i className={icons[props.type]}/>
      </span>
      }
    </>

  const icon = <>{props.icon ?
    <span className={iconClasses}>
      {props.icon}
    </span> : defaultIco}
  </>

  return (
    <>
      <label className={`${classes}`} ref={calendar} style={props.style}>
        <input className={styles['input']}
               ref={ref}
               autoFocus={props.autoFocus}
               disabled={(props.disabled !== undefined && props.disabled)}
               value={value}
               placeholder={props.placeholder}
               name={props.name}
               id={props.id}
               required={props.isRequired}
               readOnly={props.readonly}
               type={props.type || 'text'}
               maxLength={props.maxLength}
               pattern={props.pattern}
               tabIndex={props.tabIndex}
               onClick={props.onClick}
               onKeyUp={props.onKeyUp}
               onChange={handleChange}
               onFocus={handleFocus}
               onBlur={props.onBlur}
        />
        {icon}
        {
          isFocus &&
          <Calendar onSelectDate={handleSelectDate} selectedDate={selectedDate} />
        }
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
