import { forwardRef } from 'react';
import styles from './table.module.scss';
import { TableProps } from './TableProps';

export const Table = forwardRef((props: TableProps<any>, ref: any) => {
  console.log(props.columns)
  return (
    <table ref={ref} className={styles['container']}>
      <thead>
        <tr>
          {(Object.values(props.columns)).map((item, index) => {
            if(item.colSpan === 0 || item.rowSpan === 0) return null
            return (
              <th colSpan={item.colSpan} rowSpan={item.rowSpan} style={{width: item.width}} key={item.key}>
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
                    attributes = column.onCell(item, index)
                  }
                  if((attributes?.colSpan === 0 || column.colSpan === 0) || (attributes?.rowSpan === 0 || column.rowSpan === 0)) return null
                  return (
                    <td colSpan={attributes?.colSpan || column.colSpan} rowSpan={attributes?.rowSpan || column.rowSpan} style={{width: item.width}} key={tdIndex}>
                      {item[column.dataIndex]}
                    </td>
                  )
                })}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
})

