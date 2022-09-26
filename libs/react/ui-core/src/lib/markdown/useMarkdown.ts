import {MarkdownProps, MarkdownTabsEnum} from './MarkdownProps'
import React, {createRef, useCallback, useState} from 'react'

export const useMarkdown = (props: MarkdownProps) => {
  const [activeTab, setActiveTab] = useState<MarkdownTabsEnum>(props.initialSection)
  const redactorRef = createRef<HTMLTextAreaElement>()

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    console.log(e.code)
  }, [])

  const pressButton = useCallback((code: string) => {
    if(redactorRef.current) {
      const e = new KeyboardEvent('keydown', {key: code, ctrlKey: true})
      redactorRef.current.dispatchEvent(e)
    }
  },[redactorRef])

  const changeTabs = useCallback((item: {key: string | number, clickEvent: React.MouseEvent<HTMLElement>}) => {
    setActiveTab(item.key as MarkdownTabsEnum)
  }, [activeTab])

  return {redactorRef, activeTab, pressButton, onKeyDown, changeTabs}
}
