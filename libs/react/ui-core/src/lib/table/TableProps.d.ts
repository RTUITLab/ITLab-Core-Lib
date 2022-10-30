import {DefaultParams} from '../../default-types/defaultParams'
import React from 'react'

export interface TableProps<RecordType> extends DefaultParams{
  columns: ColumnsType<RecordType>[]
  data: RecordType[]
  footer?: RecordType | React.ReactNode
  tableLayout?: TableLayout
}

export interface ColumnsType<RecordType> {
  title: React.ReactNode | string
  key: React.Key
  dataIndex: string
  colSpan?: number
  rowSpan?: number
  width?: number
  sorter?: boolean
  onCell?: GetComponentProps<RecordType>
}

export type GetComponentProps<DataType> = (
  data: DataType,
  index: number,
) => React.TdHTMLAttributes<any>;

export type TableLayout = 'auto' | 'fixed';

export type TableSortType = 'descending' | 'ascending' | ''
