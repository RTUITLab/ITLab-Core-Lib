import {DefaultParams} from '../../default-types/defaultParams'
import React from 'react'

export interface TableProps<RecordType> extends DefaultParams{
  columns: ColumnsType<RecordType>[]
  data: readonly RecordType[]
}

export interface ColumnsType<RecordType> {
  title: React.ReactNode | string
  key: React.Key
  dataIndex: string
  colSpan?: number
  rowSpan?: number
  width?: number
}
