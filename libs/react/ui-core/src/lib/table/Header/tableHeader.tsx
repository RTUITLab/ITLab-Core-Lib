import React, {FC} from 'react'
import styles from '../table.module.scss'
import {ColumnsType} from '../TableProps'

const TableHeader:FC<MyProps<any>> = ({columns}) => {
  return (
    <thead>
      <tr>
        {columns.map((item) => {
          if(item.colSpan === 0 || item.rowSpan === 0) return null
          return (
            <th className={styles['table-head']} colSpan={item.colSpan} rowSpan={item.rowSpan} style={{width: item.width}} key={item.key}>
              {item.title}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default TableHeader

type MyProps<RecordType> = {
  columns: ColumnsType<RecordType>[]
}
