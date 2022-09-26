import React, {FC} from 'react'
import styles from '../markdown.module.scss'
import {MarkdownRedactorPropsType} from './MarkdownRedactorProps'
import {TextArea} from '../../text-area/text-area'

const MarkdownRedactor:FC<MarkdownRedactorPropsType> = ({redactorRef, onKeyDown, height, markdownText = '', handleChange}) => {
  return (
    <div className={styles['redactor']}>
      <TextArea onChange={handleChange} defaultValue={markdownText} style={{height: height}} resize={'none'}
                onKeyDown={onKeyDown} ref={redactorRef} className={styles['markdown-textarea']} />
    </div>
  )
}

export default MarkdownRedactor
