import React, {FC} from 'react'
import styles from '../markdown.module.scss'
import 'react-markdown'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {MarkdownPreviewPropsType} from './MarkdownPreviewProps'

export const MarkdownPreview:FC<MarkdownPreviewPropsType> = ({children = ''}) => {
  return (
    <div className={styles['preview']}>
      <ReactMarkdown className={styles['markdownPreview']} children={children} remarkPlugins={[remarkGfm]} />
    </div>
  )
}
