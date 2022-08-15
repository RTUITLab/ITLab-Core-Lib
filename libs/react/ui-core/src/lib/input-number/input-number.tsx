import styles from './input-number.module.scss';
import React, {FC, forwardRef} from 'react'
import {InputNumberProps} from './InputNumberProps'
import {useInputNumber} from './useInputNumber'

/**
 * InputNumber component
 */

export const InputNumber = forwardRef((props: InputNumberProps, ref: any) => {
  const {classes, width, handleChange} = useInputNumber(props)

  return (
    <div className={classes} style={props.style}>
      <LocalIco name={'ri-subtract-fill'} id={props.id} />
      <input className={styles['inputNumber']}
             type='number'
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
             maxLength={props.maxLength}
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
      <LocalIco name={'ri-add-fill'} id={props.id} />
    </div>
  );
})

const LocalIco:FC<LocalIcoProps> = ({name, id  }) => {
  return (
    <label className={styles['inputNumber-icon']} htmlFor={id}>
        <i className={name} />
    </label>
  )
}

type LocalIcoProps = {
  name: string
  id: string
  // onClick: (e: React.MouseEvent<HTMLElement>) => void
}
