import styles from './markdown.module.scss';
import {forwardRef} from 'react'
import {MarkdownProps} from './MarkdownProps'
import {useMarkdown} from './useMarkdown'
import {MarkdownPreview} from './Preview/markdownPreview'
import MarkdownRedactor from './Redactor/markdownRedactor'
import {Tabs} from '../tabs/tabs'
import MarkdownButtons from './Buttons/markdownButtons'

export const Markdown = forwardRef((props: MarkdownProps, ref: any) => {
  const {redactorRef, activeTab} = useMarkdown(props)
  const {split} = props

  return (
    <div className={styles['markdown']}>
      {
        split
          ?
            <div>

            </div>
          :(
            activeTab === 'Writing'
              ?
                <div>
                  <div>
                    <Tabs items={[{label: 'Редактор', key: 'Writing'}, {label: 'Просмотре', key: 'Preview'}]} />
                    <MarkdownButtons />
                  </div>
                  <MarkdownRedactor redactorRef={redactorRef} />
                </div>
              :
              <>
                <Tabs items={[{label: 'Редактор', key: 'Writing'}, {label: 'Просмотре', key: 'Preview'}]} />
                <MarkdownPreview children={'# Privet\n' +
                  '# Privet\n' +
                  '> 123\n' +
                  '\n' +
                  '``asd``'} />
              </>
          )

      }

      </div>
  );
})
