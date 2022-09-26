import styles from './markdown.module.scss';
import {forwardRef} from 'react'
import {MarkdownProps} from './MarkdownProps'
import {useMarkdown} from './useMarkdown'
import {MarkdownPreview} from './Preview/markdownPreview'
import MarkdownRedactor from './Redactor/markdownRedactor'
import {Tabs} from '../tabs/tabs'
import MarkdownButtons from './Buttons/markdownButtons'

export const Markdown = forwardRef((props: MarkdownProps, ref: any) => {
  const {redactorRef, activeTab, onKeyDown, pressButton, changeTabs, markdownText, handleChange} = useMarkdown(props)
  const {split, height} = props

  return (
    <div className={styles['markdown']} ref={ref}>
      {
        split
          ?
            <div className={styles['markdown-together']}>
              <div className={styles['markdown-together-section']}>
                <div className={styles['markdown-together-top']}>
                  Редактор
                </div>
                <div className={styles['markdown-together-content']}>
                  <div className={styles['markdown-together-buttons']}>
                    <MarkdownButtons pressButton={pressButton} handleAttachFile={props.handleAttachFile} />
                  </div>
                  <MarkdownRedactor handleChange={handleChange} markdownText={markdownText} height={height} onKeyDown={onKeyDown} redactorRef={redactorRef} />
                </div>
              </div>
              <div className={styles['markdown-together-section']}>
                <div className={styles['markdown-together-top']}>
                  Просмотр
                </div>
                <div className={styles['markdown-together-content']}>
                  <MarkdownPreview height={height} children={markdownText} />
                </div>
              </div>

            </div>
          :(
            activeTab === 'Writing'
              ?
                <div className={styles['markdown-split']}>
                  <div className={styles['markdown-split-top']}>
                    <Tabs onChange={changeTabs} defaultActiveItem={activeTab} items={[{label: 'Редактор', key: 'Writing'}, {label: 'Просмотр', key: 'Preview'}]} />
                    <MarkdownButtons pressButton={pressButton} handleAttachFile={props.handleAttachFile} />
                  </div>
                  <MarkdownRedactor handleChange={handleChange} markdownText={markdownText} height={height} onKeyDown={onKeyDown} redactorRef={redactorRef} />
                </div>
              :
              <div className={styles['markdown-split']}>
                <div className={styles['markdown-split-top']}>
                  <Tabs onChange={changeTabs} defaultActiveItem={activeTab} items={[{label: 'Редактор', key: 'Writing'}, {label: 'Просмотр', key: 'Preview'}]} />
                </div>
                <MarkdownPreview height={height} children={markdownText} />
              </div>
          )

      }

      </div>
  );
})

Markdown.defaultProps = {split: true, initialSection: 'Writing', height: 200}
