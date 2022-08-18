import styles from './input-number.module.scss';
import React, {FC, forwardRef} from 'react'
import {InputNumberProps} from './InputNumberProps'
import {useInputNumber} from './useInputNumber'

/**
 * InputNumber component
 */

export const InputNumber = forwardRef((props: InputNumberProps, ref: any) => {
  const {classes, width, handleChange, handleClick, step, value} = useInputNumber(props)

  return (
    <div className={classes} style={props.style}>
      <LocalIco name={'ri-subtract-fill'} id={props.id} handleClick={handleClick} step={-step} />
      <input className={styles['inputNumber']}
             type='text'
             ref={ref}
             autoFocus={props.autoFocus}
             disabled={(props.disabled !== undefined && props.disabled)}
             value={value}
             placeholder={props.placeholder || '0'}
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
             onChange={(e) => handleChange(e)}
             onFocus={props.onFocus}
             onBlur={props.onBlur}
             style={{width: width + 'ch'}}
      />
      <LocalIco name={'ri-add-fill'} id={props.id} handleClick={handleClick} step={step} />
    </div>
  );
})

const LocalIco:FC<LocalIcoProps> = ({name, id, handleClick, step  }) => {
  return (
    <label tabIndex={0} onClick={() => handleClick(step)} className={styles['inputNumber-icon']} htmlFor={id}>
        <i className={name} />
    </label>
  )
}

type LocalIcoProps = {
  name: string
  id: string
  handleClick: (count: number) => void
  step: number
}
