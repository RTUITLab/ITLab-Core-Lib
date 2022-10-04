import {useCallback, useMemo, useState} from 'react'
import styles from './radio.module.scss'
import {RadioProps} from './RadioProps'
import {getClasses} from '../../utils/getClasses'

/**
 * Hook for radio
 */
export function useRadio(props: RadioProps, disabled: boolean, readonly: boolean) {
  const [focused, setFocused] = useState<boolean>(false)
  const handleFocus = useCallback((focused: boolean) => {
    if(!disabled && !readonly) {
      setFocused(focused)
    }
  }, [disabled, readonly])

  const containerClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "radio": true,
      "radio-disabled": Boolean(disabled),
      "radio-readonly": Boolean(readonly),
    };
    return getClasses(conditions, styles)
  }, [disabled, readonly]);

  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "radio-box": true,
      "radio-disabled": Boolean(disabled),
      "radio-readonly": Boolean(readonly),
    };
    return getClasses(conditions, styles, props.className)
  }, [props.className, disabled, readonly]);

  const labelStyleClass = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      'radio-label': true,
      "radio-disabled": Boolean(disabled),
      "radio-readonly": Boolean(readonly),
    };
    return getClasses(conditions, styles, props.labelStyleClass)
  }, [props.labelStyleClass, disabled, readonly]);

  return {classes, labelStyleClass, focused, handleFocus, containerClasses}
}
