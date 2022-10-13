import React, {FC} from 'react'
import styles from '../markdown.module.scss'
import '../../../../../../../styles/components/markdown/index.scss'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {MarkdownPreviewPropsType} from './MarkdownPreviewProps';

export const MarkdownPreview:FC<MarkdownPreviewPropsType> = ({children = '', height}) => {
  return (
    <div style={{height: height}} className={styles['preview']}>
      <ReactMarkdown className={styles['markdownPreview']} children={children} remarkPlugins={[remarkGfm]} />
    </div>
  )
}
