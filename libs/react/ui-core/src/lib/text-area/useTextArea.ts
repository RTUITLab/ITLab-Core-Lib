import React, {useCallback, useEffect, useMemo, useState} from 'react'
import styles from './text-area.module.scss'
import {TextAreaProps} from './TextAreaProps'
import {getClasses} from '../../utils/getClasses'

export function useTextArea(props: TextAreaProps) {
  const [length, setLength] = useState(props.defaultValue?.length || 0)
  const [value, setValue] = useState(props.defaultValue || '')

  useEffect(() => {
    setValue(props.defaultValue || '')
  }, [props.defaultValue])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(props.onChange) props.onChange(e)
    if(props.onError && props.maxLength) props.onError()
    setValue(e.target.value)
    setLength(e.target.value.length)
  }, [props])

  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "text-area": true,
      "text-area-readonly": Boolean(props.readonly),
      "text-area-valid":  Boolean(props.valid),
      "text-area-invalid": Boolean((props.error) || (props.maxLength && props.maxLength < length)),
      "small-size": props.size === 'small',
      "medium-size": props.size === 'medium' || !props.size,
      "large-size": props.size === 'large',
      "resize-vertical": props.resize === 'vertical',
      "resize-horizontal": props.resize === 'horizontal',
      "resize-none": props.resize === 'none',
    };
    return getClasses(conditions, styles, props.className);
  }, [props, length])

  return {classes, handleChange, length, value}
}

