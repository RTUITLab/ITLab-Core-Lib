import React from 'react'
import {forwardRef} from 'react'
import {TagProps} from './TagProps'
import {useTag} from './useTag'
import {Tooltip} from '../tooltip/tooltip'
import {Badge} from '../badge/badge'
import {FunctionalButton} from '../functional-button/functional-button'
import Icon from '../icon/icon'

export const Tag = forwardRef((props: TagProps, ref: any) => {
  const {tagRef, hidden, classes} = useTag(props)
  const tooltipStyle = {padding: '6px 8px', fontSize: 12, lineHeight: '14px'}

  return (
    <Badge ref={ref} className={classes} color={props.color} type={props.type} shape={props.shape} style={props.style}>
      <Tooltip style={tooltipStyle} hidden={hidden} position={props.tooltipPosition || 'top'} textStyle={{maxWidth: props.maxLength, textOverflow: 'ellipsis', overflowX: 'hidden', whiteSpace: 'nowrap'}} tooltipContent={props.children} ref={tagRef}>
        {props.children}
      </Tooltip>
      <Tooltip style={tooltipStyle} position={props.tooltipPosition || 'top'} tooltipContent={props.tooltipCrossContent || 'Удалить'}>
        <FunctionalButton onClick={props.onClick} displayIco icon={<Icon name={'ri-close-line'} type={'line'} size={13} />} />
      </Tooltip>
    </Badge>
  );
})

Tag.defaultProps = {maxLength: 150}
