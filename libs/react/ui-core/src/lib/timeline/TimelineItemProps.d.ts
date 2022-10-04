import {DefaultParams} from '../../default-types/defaultParams'
import React from 'react'

export interface TimelineItemProps extends DefaultParams {
  type?: 'default' | 'success' | 'error' | 'icon'
  date?: string
  children?: string | React.ReactNode
  active?: boolean
}
