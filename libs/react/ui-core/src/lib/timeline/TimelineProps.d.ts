import React from 'react'
import {DefaultParams} from '../../default-types/defaultParams'

export interface TimelineItemProps extends DefaultParams {
  type?: 'default' | 'success' | 'error'
  date?: string
  children?: string | React.ReactNode
}

export interface TimelineProps extends DefaultParams {
  children?: React.ReactNode;
}

export interface TimelineType extends React.FC<TimelineProps> {
  Item: React.FC<TimelineItemProps>
}


