import styles from './currency-input.module.scss';
import {CurrencyInputProps} from './CurrencyInputProps'
import {useInputNumber} from './useCurrencyInput'
import React, {forwardRef} from 'react'

export const CurrencyInput = forwardRef((props: CurrencyInputProps, ref: any) => {
  const {classes, width, handleChange, value} = useInputNumber(props)

  const icon = <>{props.icon ? <span className={'checkbox-icon'}>{props.icon}</span>
    : <span className={'checkbox-icon ri-check-line'}>
      <i className={'ri-information-line'}></i>
    </span>}</>

  return (
    <div className={classes} style={props.style}>
      <input className={styles['currencyInput-number']}
             type='tel'
             ref={ref}
             autoFocus={props.autoFocus}
             disabled={(props.disabled !== undefined && props.disabled)}
             value={value}
             placeholder={props.placeholder || '0'}
             name={props.name}
             id={props.id}
             required={props.isRequired}
             readOnly={props.readonly}
             min={props.min}
             max={props.max}
             tabIndex={props.tabIndex}
             onClick={props.onClick}
             onKeyUp={props.onKeyUp}
             onChange={(e) => handleChange(e)}
             onFocus={props.onFocus}
             onBlur={props.onBlur}
             style={{width: width + 'ch'}}
      />
      <span className={styles['currency']}>{props.currency || '₽'}</span>
    </div>
  );
})

export default CurrencyInput;
