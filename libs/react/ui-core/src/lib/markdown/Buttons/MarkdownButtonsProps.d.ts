import React from 'react'

export type MarkdownButtonsPropsType = {

  pressButton: (code: string) => void

  handleAttachFile?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
