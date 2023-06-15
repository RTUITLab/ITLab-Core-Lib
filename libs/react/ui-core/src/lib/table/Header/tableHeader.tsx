import React, {FC} from 'react'
import styles from '../table.module.scss'
import {ColumnsType, TableSortType} from '../TableProps'
import Icon from '../../icon/icon'
import {useTableHeader} from './useTableHeader'

const TableHeader:FC<TableHeaderProps<any>> = React.memo(({columns, sortValue, sortType, sortTable}) => {
  const {getIconClasses} = useTableHeader({columns, sortValue, sortType, sortTable})
  return (
    <thead>
      <tr>
        {columns.map((item) => {
          if(item.colSpan === 0 || item.rowSpan === 0) return null
          return (
            <th className={styles['table-head']} colSpan={item.colSpan} rowSpan={item.rowSpan} style={{width: item.width}} key={item.key}>
              <span className={styles['table-head-cell']}>
                {item.title}
                {
                  item.sorter && <Icon onClick={() => item.sorter && sortTable(item.dataIndex, sortType)} className={getIconClasses(item.dataIndex)} name={'ri-arrow-down-s-fill'} size={18} type={'fill'} />
                }
              </span>
            </th>
          )
        })}
      </tr>
    </thead>
  )
})

export default TableHeader

export type TableHeaderProps<RecordType> = {
  columns: ColumnsType<RecordType>[]
  sortValue: string
  sortType: TableSortType
  sortTable: (value: string, type: TableSortType) => void
}
