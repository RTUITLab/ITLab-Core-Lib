import React from 'react'

export interface MarkdownProps {
  split?: boolean

  handleAttachFile: (e: React.ChangeEvent<HTMLInputElement>) => void

  initialSection: 'Writing' | 'Preview'

  /** Height of the Markdown */
  height?: number
}

export type MarkdownTabsEnum = 'Writing' | 'Preview'
