import React, {useCallback, useMemo, useState} from 'react'
import styles from './text-area.module.scss'
import {TextAreaProps} from './TextAreaProps'
import {getClasses} from '../../utils/getClasses'

export function useTextArea(props: TextAreaProps) {
  const [length, setLength] = useState(props.defaultValue?.length || 0)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(props.onChange) props.onChange(e)
    if(!!props.onError && !!props.maxLength) props.onError()
    setLength(e.target.value.length)
  }, [props])

  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "text-area": true,
      "text-area-readonly": !!props.readonly,
      "text-area-valid":  !!props.valid,
      "text-area-invalid":  !!props.error || (!!props.maxLength && props.maxLength < length),
      "small-size": props.size === 'small',
      "medium-size": props.size === 'medium' || !props.size,
      "large-size": props.size === 'large',
      "resize-vertical": props.resize === 'vertical',
      "resize-horizontal": props.resize === 'horizontal',
      "resize-none": props.resize === 'none',
    };
    return getClasses(conditions, styles, props.className);
  }, [props, length])

  return {classes, handleChange, length}
}

