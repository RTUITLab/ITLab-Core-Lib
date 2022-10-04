import {SwitchProps} from './SwitchProps'
import React, {useCallback, useMemo, useState} from 'react'
import {getClasses} from '../../utils/getClasses'
import styles from './switch.module.scss'

export const useSwitch = (props: SwitchProps) => {
  const [checked, setChecked] = useState<boolean>(!!props.defaultChecked || false)

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setChecked((checked) => {
      if(props.onChange) props.onChange(!checked)
      return !checked
    })
    if(props.onClick) props.onClick(e)
  }, [])

  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "switch": true,
      "switch-checked": checked,
      "switch-small": props.size === 'small',
    };
    return getClasses(conditions, styles, props.className)
  }, [props, checked]);

  const labelClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "switch-label": true,
      "switch-label-right": props.labelPosition === 'right',
    };
    return getClasses(conditions, styles, props.labelClassName)
  }, [props, checked]);

  return {checked, handleClick, classes, labelClasses}
}
