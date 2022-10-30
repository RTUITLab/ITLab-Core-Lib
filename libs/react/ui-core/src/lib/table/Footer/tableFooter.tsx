import React, {FC} from 'react'
import styles from '../table.module.scss'
import {ColumnsType} from '../TableProps'

const TableFooter:FC<MyProps<any>> = ({footer, columns, dataLength}) => {
  return (
    <>
      {
        footer &&
        !React.isValidElement(footer)
          ?
          <tfoot className={styles['table-footer']}>
            <tr>
              {columns.map((column, index) => {
                let attributes
                if(column.onCell) {
                  attributes = column.onCell(footer, dataLength) // footer row number
                }
                if((attributes?.colSpan === 0 || column.colSpan === 0) || (attributes?.rowSpan === 0 || column.rowSpan === 0)) return null
                return (
                  <td className={styles['table-cell']} colSpan={column.colSpan} rowSpan={column.rowSpan} style={{width: column.width, ...attributes?.style}} key={index}>
                    {footer[column.dataIndex]}
                  </td>
                )
              })}
            </tr>
          </tfoot>
          :
          <tfoot className={styles['table-footer']}>
            <tr>
              <td className={`${styles['table-cell']} ${styles['table-footer-element']}`} colSpan={3}>
                {footer}
              </td>
            </tr>
          </tfoot>
      }
    </>
  )
}

export default TableFooter

type MyProps<RecordType> = {
  footer?: RecordType | React.ReactNode
  columns: ColumnsType<RecordType>[]
  dataLength: number
}
