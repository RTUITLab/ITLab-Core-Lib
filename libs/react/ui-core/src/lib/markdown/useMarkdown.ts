import {MarkdownProps} from './MarkdownProps'
import React, {createRef, useCallback, useState} from 'react'

export const useMarkdown = (props: MarkdownProps) => {
  const [activeTab, setActiveTab] = useState<'Writing' | 'Preview'>('Writing')
  const redactorRef = createRef<HTMLTextAreaElement>()

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    console.log(e.code)
  }, [])

  const pressButton = useCallback((code: number) => {
    if(redactorRef.current) {
      const e = new KeyboardEvent('keydown', {key: String(code), ctrlKey: true})
      redactorRef.current.dispatchEvent(e)
    }
  },[redactorRef])

  return {redactorRef, activeTab}
}
