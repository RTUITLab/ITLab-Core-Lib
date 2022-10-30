import {DefaultParams} from '../../default-types/defaultParams'
import React from 'react'
import {ClickableObjectMini} from '../../default-types/ClickableObjectMini'

export interface TableProps<RecordType> extends DefaultParams, ClickableObjectMini{


  /** ColumnsType
   *
   * interface ColumnsType<{DataType}> { <br/>
   *  &nbsp;&nbsp; title: React.ReactNode | string <br/>
   *  &nbsp;&nbsp; key: React.Key <br/>
   *  &nbsp;&nbsp; dataIndex: string <br/>
   *  &nbsp;&nbsp; colSpan?: number <br/>
   *  &nbsp;&nbsp; rowSpan?: number <br/>
   *  &nbsp;&nbsp; width?: number <br/>
   *  &nbsp;&nbsp; sorter?: boolean <br/>
   *  &nbsp;&nbsp; onCell?: GetComponentProps<RecordType> <br/>
   * }
   *
   * */
  columns: ColumnsType<RecordType>[]

  /** Data of table body
   *
   * DataType[] - Array of column's dataIndexes
   *
   * */
  data: RecordType[]

  /** Data of table footer
   *
   * DataType - Last object of column's dataIndexes or ReactNode
   *
   * */
  footer?: RecordType | React.ReactNode

  /** Table layout prop */
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
