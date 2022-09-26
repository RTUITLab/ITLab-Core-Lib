import React, {FC} from 'react'
import styles from '../markdown.module.scss'
import {MarkdownRedactorPropsType} from './MarkdownRedactorProps'
import {TextArea} from '@itlab-core-lib/react/ui-core'

const MarkdownRedactor:FC<MarkdownRedactorPropsType> = ({redactorRef}) => {
  return (
    <div className={styles['redactor']}>
      <TextArea ref={redactorRef} className={styles['markdown-textarea']} />
    </div>
  )
}

export default MarkdownRedactor
