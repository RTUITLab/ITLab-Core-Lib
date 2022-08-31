import {TagProps} from './TagProps'
import React, {useEffect, useState} from 'react'

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

  return {tagRef, hidden}
}
