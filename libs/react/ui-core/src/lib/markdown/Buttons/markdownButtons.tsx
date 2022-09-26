import React, {FC} from 'react'
import styles from '../markdown.module.scss'
import {MarkdownButtonsPropsType} from './MarkdownButtonsProps'
import Icon from '../../icon/icon'

const MarkdownButtons:FC<MarkdownButtonsPropsType> = ({pressButton, handleAttachFile}) => {
  return (
    <div className={styles['markdown-buttons']}>
      <div className={styles['markdown-buttons-section']}>
        <Icon size={24} name={'ri-heading'} type={''} onClick={() => pressButton('h')}></Icon>
        <Icon size={24} name={'ri-bold'} type={''} onClick={() => pressButton('b')}></Icon>
        <Icon size={24} name={'ri-italic'} type={''} onClick={() => pressButton('i')}></Icon>
      </div>
      <div className={styles['markdown-buttons-section']}>
        <Icon size={24} name={'ri-code-view'} type={''} onClick={() => pressButton('k')}></Icon>
        <Icon size={24} name={'ri-link'} type={''} onClick={() => pressButton('l')}></Icon>
        <Icon size={24} name={'ri-list-check-2'} type={''} onClick={() => pressButton('q')}></Icon>
      </div>
      <div className={styles['markdown-buttons-section']}>
        <Icon size={24} name={'ri-list-unordered'} type={''} onClick={() => pressButton('u')}></Icon>
        <Icon size={24} name={'ri-list-ordered'} type={''} onClick={() => pressButton('o')}></Icon>
        <Icon size={24} name={'ri-checkbox-line'} onClick={() => pressButton('j')}></Icon>
      </div>
      <div className={styles['markdown-buttons-section']}>
        <label htmlFor='attach'><Icon size={24} name={'ri-attachment-2'} type={''}></Icon></label>
        <input type='file' id='attach' style={{display: 'none'}} onChange={(e) => handleAttachFile(e)} multiple />
      </div>
    </div>
  )
}

export default MarkdownButtons
