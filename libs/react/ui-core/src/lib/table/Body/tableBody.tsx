import React, {FC} from 'react'
import styles from '../table.module.scss'
import {ColumnsType} from '../TableProps'

const TableBody:FC<MyProps<any>> = ({data, columns}) => {
  return (
    <tbody>
    {
      (data.map((item, index) => {
        return (
          <tr key={item.key}>
            {columns.map((column, tdIndex) => {
              let attributes
              if(column.onCell) {
                attributes = column.onCell(item, index) // index - row number
              }
              if((attributes?.colSpan === 0 || column.colSpan === 0) || (attributes?.rowSpan === 0 || column.rowSpan === 0)) return null
              return (
                <td className={styles['table-cell']} colSpan={attributes?.colSpan || column.colSpan} rowSpan={attributes?.rowSpan || column.rowSpan} style={{width: column.width, ...attributes?.style}} key={tdIndex}>
                  {item[column.dataIndex]}
                </td>
              )
            })}
          </tr>
        )
      }))
    }
    </tbody>
  )
}

export default TableBody

type MyProps<RecordType> = {
  data: RecordType[]
  columns: ColumnsType<RecordType>[]
}
