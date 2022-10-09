import styles from './input-number.module.scss';
import React, {FC, forwardRef} from 'react'
import {InputNumberProps} from './InputNumberProps'
import {useInputNumber} from './useInputNumber'
import Icon from '../icon/icon'
import { IcoProps } from './IcoProps';

/**
 * InputNumber component
 */

export const InputNumber = forwardRef(({displayButtons = true, ...props}: InputNumberProps, ref: any) => {
  const {classes, width, handleChange, handleClick, step, value, handleBlur, spanValueRef} = useInputNumber(props)

  return (
    <div className={classes}>
      {displayButtons &&
        <LocalIco style={props.iconStyle} name={'ri-subtract-fill'} id={props.id} handleClick={handleClick} step={-step} />
      }
      <input className={styles['inputNumber']}
             type='text'
             ref={ref}
             autoFocus={props.autoFocus}
             disabled={(props.disabled !== undefined && props.disabled)}
             value={value}
             placeholder={'0'}
             name={props.name}
             id={props.id}
             step={props.step || 1}
             inputMode={'decimal'}
             required={props.isRequired}
             readOnly={props.readonly}
             min={props.min}
             max={props.max}
             tabIndex={props.tabIndex}
             onClick={props.onClick}
             onKeyUp={props.onKeyUp}
             onChange={handleChange}
             onFocus={props.onFocus}
             onBlur={handleBlur}
             style={{width: width, ...props.style}}
      />
      {displayButtons &&
        <LocalIco style={props.iconStyle} name={'ri-add-fill'} id={props.id} handleClick={handleClick} step={step} />
      }
      {/*Need to count input value width and autoscale input*/}
      <span className={styles['inputNumber-hidden']} ref={spanValueRef}>{value}</span>
    </div>
  );
})

const LocalIco:FC<IcoProps> = React.memo(({name, id, handleClick, step, style  }) => {
  return (
    <label tabIndex={0} onClick={() => handleClick(step)} className={styles['inputNumber-icon']} htmlFor={id}>
      <Icon style={style} name={name} size={17} />
    </label>
  )
})
