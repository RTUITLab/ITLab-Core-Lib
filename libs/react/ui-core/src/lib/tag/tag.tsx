import React from 'react'
import styles from './tag.module.scss';
import {forwardRef} from 'react'
import {TagProps} from './TagProps'
import {useTag} from './useTag'
import {Tooltip} from '../tooltip/tooltip'
import {Badge} from '../badge/badge'
import {FunctionalButton} from '../functional-button/functional-button'
import Icon from '../icon/icon'

export const Tag = forwardRef(({maxLength = 150, ...props}: TagProps, ref: any) => {
  const {tagRef, hidden} = useTag(props)

  return (
    <div ref={ref} className={styles['tag']}>
        <Badge className={styles['tag-badge']} color={props.color} type={props.type} shape={props.shape} style={props.style}>
          <Tooltip hidden={hidden} position={props.tooltipPosition || 'top'} textStyle={{maxWidth: maxLength, textOverflow: 'ellipsis', overflowX: 'hidden', whiteSpace: 'nowrap'}} tooltipContent={props.children} ref={tagRef}>
            {props.children}
          </Tooltip>
          <Tooltip position={props.tooltipPosition || 'top'} tooltipContent={props.tooltipCrossContent || 'Удалить'}>
            <FunctionalButton onClick={props.onClick} displayIco icon={<Icon name={'ri-close-line'} type={'line'} size={13} />} />
          </Tooltip>
        </Badge>
    </div>
  );
})
