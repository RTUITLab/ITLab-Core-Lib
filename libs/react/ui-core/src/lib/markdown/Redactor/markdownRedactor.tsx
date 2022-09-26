import React, {FC} from 'react'
import styles from '../markdown.module.scss'
import {MarkdownRedactorPropsType} from './MarkdownRedactorProps'
import {TextArea} from '@itlab-core-lib/react/ui-core'

const MarkdownRedactor:FC<MarkdownRedactorPropsType> = ({redactorRef, onKeyDown, height}) => {
  return (
    <div className={styles['redactor']}>
      <TextArea style={{height: height}} resize={'none'} onKeyDown={onKeyDown} ref={redactorRef} className={styles['markdown-textarea']} />
    </div>
  )
}

export default MarkdownRedactor
