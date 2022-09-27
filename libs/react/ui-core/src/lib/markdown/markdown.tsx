import styles from './markdown.module.scss';
import {forwardRef} from 'react'
import {MarkdownProps} from './MarkdownProps'
import {useMarkdown} from './useMarkdown'
import {MarkdownPreview} from './Preview/markdownPreview'
import MarkdownRedactor from './Redactor/markdownRedactor'
import {Tabs} from '../tabs/tabs'
import MarkdownButtons from './Buttons/markdownButtons'
import {useDropdownItem} from '../../utils/useDropdownItem'

export const Markdown = forwardRef((props: MarkdownProps, ref: any) => {
  const {redactorRef, activeTab, onKeyDown, pressButton, changeTabs, markdownText, handleChange} = useMarkdown(props)
  const {contentRef, defaultContentHeight} = useDropdownItem()
  const {split, height = 200} = props
  const markdownHeight = height < 100 ? 200 : height

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
                  <div ref={contentRef} className={styles['markdown-together-buttons']}>
                    <MarkdownButtons pressButton={pressButton} handleAttachFile={props.onAttachFile} />
                  </div>
                  <MarkdownRedactor handleChange={handleChange} markdownText={markdownText} height={markdownHeight} onKeyDown={onKeyDown} redactorRef={redactorRef} />
                </div>
              </div>
              <div className={styles['markdown-together-section']}>
                <div className={styles['markdown-together-top']}>
                  Просмотр
                </div>
                <div className={styles['markdown-together-content']}>
                  {/*user height + height of buttons + padding of buttons*/}
                  <MarkdownPreview height={markdownHeight + defaultContentHeight + 30} children={markdownText} />
                </div>
              </div>
            </div>
          :(
            activeTab === 'Writing'
              ?
                <div className={styles['markdown-split']}>
                  <div className={styles['markdown-split-top']}>
                    <Tabs onChange={changeTabs} defaultActiveItem={activeTab} items={[{label: 'Редактор', key: 'Writing'}, {label: 'Просмотр', key: 'Preview'}]} />
                    <MarkdownButtons pressButton={pressButton} handleAttachFile={props.onAttachFile} />
                  </div>
                  <MarkdownRedactor handleChange={handleChange} markdownText={markdownText} height={markdownHeight} onKeyDown={onKeyDown} redactorRef={redactorRef} />
                </div>
              :
              <div className={styles['markdown-split']}>
                <div className={styles['markdown-split-top']}>
                  <Tabs onChange={changeTabs} defaultActiveItem={activeTab} items={[{label: 'Редактор', key: 'Writing'}, {label: 'Просмотр', key: 'Preview'}]} />
                </div>
                <MarkdownPreview height={markdownHeight} children={markdownText} />
              </div>
          )
      }
      </div>
  );
})

Markdown.defaultProps = {split: true, initialSection: 'Writing', height: 200, value: ''}
