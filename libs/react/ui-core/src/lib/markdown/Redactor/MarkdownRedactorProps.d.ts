import React from 'react'

export type MarkdownRedactorPropsType = {

  redactorRef: any

  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>

  height?:number

  markdownText?: string

  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
