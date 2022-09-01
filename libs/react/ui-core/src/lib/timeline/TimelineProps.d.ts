import React from 'react'
import {DefaultParams} from '../../default-types/defaultParams'

export interface TimelineItemProps extends DefaultParams {
  type?: 'default' | 'success' | 'error'
  date?: string
  label?: string
}

export interface TimelineProps {
  children?: React.ReactNode;
}

export interface TimelineType extends React.FC<TimelineProps> {
  Item: React.FC<TimelineItemProps>
}


