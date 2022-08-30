import React, {forwardRef} from 'react'
import styles from './switch.module.scss'
import {SwitchProps} from './SwitchProps'
import {useSwitch} from './useSwitch'
import {getAllEvents} from '../../utils/getAllEvents'

export const Switch = forwardRef((props: SwitchProps, ref: any) => {
  const {checked, handleClick, classes, labelClasses} = useSwitch(props)

  return (
    <div className={styles['switch-wrapper']}>
      <button ref={ref}
              className={classes}
              style={props.style}
              type='button'
              role='switch'
              id={props.id}
              disabled={props.disabled}
              aria-checked={checked}
              {...getAllEvents(props)}
              onClick={handleClick}
      >
      </button>
      {
        props.label &&
        <label className={labelClasses} htmlFor={props.id}>{props.label}</label>
      }
    </div>
  );
})
