import {MarkdownProps, MarkdownTabsEnum} from './MarkdownProps'
import React, {useCallback, useEffect, useRef, useState} from 'react'

export const useMarkdown = (props: MarkdownProps) => {
  const [activeTab, setActiveTab] = useState<MarkdownTabsEnum>(props.initialSection || 'Writing')
  const [markdownText, setMarkdownText] = useState<string>('')
  const redactorRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if(props.value) {
      setMarkdownText(props.value)
    }
  }, [props.value])

  useEffect(() => {
    if(props.onChange && markdownText !== props.value) {
      props.onChange(markdownText)
    }
  }, [markdownText])

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    let start = redactorRef.current?.selectionStart || 0
    let end = redactorRef.current?.selectionEnd || 0
    let changed = false
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault()
      changed = true
      let place = 0
      for (let i = start - 1; i >= 0 && place === 0; i--) {
        if (markdownText.charAt(i) === `\n`) {
          place = i + 1
        }
      }
      setMarkdownText((markdownText) => markdownText.substring(0, place) + `### ` + markdownText.substring(place, markdownText.length))
      start = start + 4
      end = end + 4
      for (let i = start; i < end; i++) {
        if (markdownText.charAt(i) === `\n`) {
          setMarkdownText((markdownText) => markdownText.substring(0, i + 1) + `### `
            + markdownText.substring(i + 1, markdownText.length))
          end = end + 4
        }
      }
    }
    else if (e.ctrlKey && e.key === 'i') {
      e.preventDefault()
      changed = true
      setMarkdownText((markdownText) => markdownText.substring(0, start) + `*`
        + markdownText.substring(start, markdownText.length))
      start = start + 1
      end = end + 1
      setMarkdownText((markdownText) => markdownText.substring(0, end) + `*`
        + markdownText.substring(end, markdownText.length))
    }
    else if (e.ctrlKey && e.key === 'b') {
      e.preventDefault()
      changed = true
      setMarkdownText((markdownText) => markdownText.substring(0, start) + `**`
        + markdownText.substring(start, markdownText.length))
      start = start + 2
      end = end + 2
      setMarkdownText((markdownText) => markdownText.substring(0, end) + `**`
        + markdownText.substring(end, markdownText.length))
    }
    else if (e.ctrlKey && e.key === 'q') {
      e.preventDefault()
      changed = true
      let place = 0
      for (let i = start - 1; i >= 0 && place === 0; i--) {
        if (markdownText.charAt(i) === `\n`) {
          place = i + 1
        }
      }
      setMarkdownText((markdownText) => markdownText.substring(0, place) + `> `
        + markdownText.substring(place, markdownText.length))
      start = start + 2
      end = end + 2
      for (let i = start; i < end; i++) {
        if (markdownText.charAt(i) === `\n`) {
          setMarkdownText((markdownText) => markdownText.substring(0, i + 1) + `> `
            + markdownText.substring(i + 1, markdownText.length))
          end = end + 2
        }
      }
    }
    else if (e.ctrlKey && e.key === 'k') {
      e.preventDefault()
      changed = true
      setMarkdownText((markdownText) => markdownText.substring(0, start) + `\``
        + markdownText.substring(start, markdownText.length))
      start = start + 1
      end = end + 1
      setMarkdownText((markdownText) => markdownText.substring(0, end) + `\``
        + markdownText.substring(end, markdownText.length))
    }
    else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault()
      changed = true
      setMarkdownText((markdownText) => markdownText.substring(0, start) + `[`
        + markdownText.substring(start, markdownText.length))
      start = start + 1
      end = end + 1
      setMarkdownText((markdownText) => markdownText.substring(0, end) + `](url)`
        + markdownText.substring(end, markdownText.length))
    }
    else if (e.ctrlKey && e.key === 'u') {
      e.preventDefault()
      changed = true
      let place = 0
      for (let i = start - 1; i >= 0 && place === 0; i--) {
        if (markdownText.charAt(i) === `\n`) {
          place = i + 1
        }
      }
      setMarkdownText((markdownText) => markdownText.substring(0, place) + `- `
        + markdownText.substring(place, markdownText.length))
      start = start + 2
      end = end + 2
      for (let i = start; i < end; i++) {
        if (markdownText.charAt(i) === `\n`) {
          setMarkdownText((report) => report.substring(0, i + 1) + `- `
            + report.substring(i + 1, report.length))
          end = end + 2
        }
      }
    }
    else if (e.ctrlKey && e.key === 'o') {
      e.preventDefault()
      changed = true
      let place = 0
      let order = 1
      for (let i = start - 1; i >= 0 && place === 0; i--) {
        if (markdownText.charAt(i) === `\n`) {
          place = i + 1
        }
      }
      setMarkdownText((markdownText) => markdownText.substring(0, place) + `${order}. `
        + markdownText.substring(place, markdownText.length))
      start = start + 2 + order.toString().length
      end = end + 2 + order.toString().length
      order = order + 1
      for (let i = start; i < end; i++) {
        if (markdownText.charAt(i) === `\n`) {
          setMarkdownText((markdownText) => markdownText.substring(0, i + 1) + `${order}. `
            + markdownText.substring(i + 1, markdownText.length))
          end = end + 2 + order.toString().length;
          order = order + 1
        }
      }
    }
    else if (e.ctrlKey && e.key === 'j') {
      e.preventDefault()
      changed = true
      let place = 0
      for (let i = start - 1; i >= 0 && place === 0; i--) {
        if (markdownText.charAt(i) === `\n`) {
          place = i + 1
        }
      }
      setMarkdownText((markdownText) => markdownText.substring(0, place) + `- [ ] `
        + markdownText.substring(place, markdownText.length))
      start = start + 6
      end = end + 6
      for (let i = start; i < end; i++) {
        if (markdownText.charAt(i) === `\n`) {
          setMarkdownText((markdownText) => markdownText.substring(0, i + 1) + `- [ ] `
            + markdownText.substring(i + 1, markdownText.length))
          end = end + 6
        }
      }
    }
    if (changed) {
      setTimeout(() => {
        if(redactorRef.current) {
          redactorRef.current.selectionStart = start;
          redactorRef.current.selectionEnd = end;
        }
      }, 100);
    }
  }, [markdownText, redactorRef])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value)
  }, [])

  const pressButton = useCallback((code: string) => {
    const e = new KeyboardEvent('keydown', {key: code, ctrlKey: true}) as any
    onKeyDown(e)
  },[onKeyDown])

  const changeTabs = useCallback((item: {key: string | number, clickEvent: React.MouseEvent<HTMLElement>}) => {
    setActiveTab(item.key as MarkdownTabsEnum)
  }, [])

  return {redactorRef, activeTab, pressButton, onKeyDown, changeTabs, markdownText, handleChange}
}
