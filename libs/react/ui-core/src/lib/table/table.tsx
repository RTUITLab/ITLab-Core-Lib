import { forwardRef } from 'react';
import styles from './table.module.scss';
import { TableProps } from './TableProps';
import {useTable} from './useTable'

export const Table = forwardRef((props: TableProps<any>, ref: any) => {
  const {classes} = useTable(props)
  console.log(props.columns)
  return (
    <table ref={ref} className={classes}>
      <thead>
        <tr>
          {(Object.values(props.columns)).map((item, index) => {
            if(item.colSpan === 0 || item.rowSpan === 0) return null
            return (
              <th className={styles['table-head']} colSpan={item.colSpan} rowSpan={item.rowSpan} style={{width: item.width}} key={item.key}>
                {item.title}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {
          (Object.values(props.data)).map((item, index) => {

            return (
              <tr key={item.key}>
                {props.columns.map((column, tdIndex) => {
                  let attributes
                  if(column.onCell) {
                    attributes = column.onCell(item, index) // index - row number
                  }
                  if((attributes?.colSpan === 0 || column.colSpan === 0) || (attributes?.rowSpan === 0 || column.rowSpan === 0)) return null
                  return (
                    <td className={styles['table-cell']} colSpan={attributes?.colSpan || column.colSpan} rowSpan={attributes?.rowSpan || column.rowSpan} style={{width: item.width, ...attributes?.style}} key={tdIndex}>
                      {item[column.dataIndex]}
                    </td>
                  )
                })}
              </tr>
            )
          })
        }
      </tbody>
      {
        props.footer &&
        <tfoot className={styles['table-footer']}>
          <tr>
            {props.columns.map((column, tdIndex) => {
              let attributes
              if(column.onCell) {
                debugger
                attributes = column.onCell(props.footer, props.data.length) // footer row number
              }
              if((attributes?.colSpan === 0 || column.colSpan === 0) || (attributes?.rowSpan === 0 || column.rowSpan === 0)) return null
              return (
                <td className={styles['table-cell']} colSpan={column.colSpan} rowSpan={column.rowSpan} style={{width: column.width}} key={tdIndex}>
                  {props.footer[column.dataIndex]}
                </td>
              )
            })}
          </tr>
        </tfoot>
      }
    </table>
  );
})

