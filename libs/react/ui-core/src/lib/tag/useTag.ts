import {TagProps} from './TagProps'
import styles from './tag.module.scss'
import React, {useEffect, useMemo, useState} from 'react'
import {getClasses} from '../../utils/getClasses'

export const useTag = (props: TagProps) => {
  const [hidden, setHidden] = useState<boolean>(false)
  const tagRef = React.createRef<HTMLDivElement>()

  useEffect(() => {
    if(tagRef.current) {
      if(tagRef.current.offsetWidth >= (props.maxLength || 150)) {
        setHidden(false)
      }
      else {
        setHidden(true)
      }
    }
  }, [tagRef, props.maxLength])

  const classes = useMemo(() => {
    return getClasses({'tag-badge': true}, styles, props.className)
  }, [props.className])

  return {tagRef, hidden, classes}
}
