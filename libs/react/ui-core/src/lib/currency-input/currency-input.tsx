import styles from './currency-input.module.scss';
import {CurrencyInputProps} from './CurrencyInputProps'
import {useInputNumber} from './useCurrencyInput'
import React, {forwardRef} from 'react'
import {Tooltip} from '../tooltip/tooltip'

export const CurrencyInput = forwardRef((props: CurrencyInputProps, ref: any) => {
  const {classes, width, handleChange, value, localRef, handleBlur} = useInputNumber(props)

  const icon = <>
    {props.displayInformation && (props.isSuccess || props.isAwaiting) && (
      props.icon
      ?
        <Tooltip hidden={props.disabled} tooltipContent={<></>} type={'meta'} position={props.informationPosition || 'top'} metaTitle={props.information?.title} metaDescription={props.information?.description}>
          <span className={styles['currencyInput-icon']}>{props.icon}</span>
        </Tooltip>
      :
        <Tooltip hidden={props.disabled} tooltipContent={<></>} type={'meta'} position={props.informationPosition || 'top'} metaTitle={props.information?.title} metaDescription={props.information?.description}>
          <span className={styles['currencyInput-icon']}>
            <i className={'ri-information-line'}></i>
          </span>
        </Tooltip>
    )}</>

  return (
    <div className={classes} style={props.style}>
      <input className={styles['currencyInput-number']}
             type='text'
             ref={ref}
             autoFocus={props.autoFocus}
             disabled={(props.disabled !== undefined && props.disabled)}
             value={value}
             name={props.name}
             placeholder={'0'}
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
             onBlur={handleBlur}
             size={props.size}
             style={!props.size ? {width: width} : {}}
      />
      <span className={styles['currencyInput-currency']}>{props.currency || '₽'}</span>
      {icon}
      {/*Need to count input value width and autoscale input*/}
      <span className={styles['currencyInput-hidden']} ref={localRef}>{value}</span>
    </div>
  );
})

export default CurrencyInput;
