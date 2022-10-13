import React from 'react'

export interface MarkdownProps {

  /** Specifies the type of Markdown */
  split?: boolean

  /** The onAttachFile event */
  onAttachFile?: (e: React.ChangeEvent<HTMLInputElement>) => void

  /** The onChange event */
  onChange?: (value: string) => void

  /** Markdown initial tab section */
  initialSection?: 'Writing' | 'Preview'

  /** Height of the Markdown */
  height?: number

  /** Value of the Markdown */
  value?: string
}

export type MarkdownTabsEnum = 'Writing' | 'Preview'
