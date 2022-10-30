import {useMemo} from 'react'
import {getClasses} from '../../utils/getClasses'
import styles from './table.module.scss'
import {TableProps} from './TableProps'

export const useTable = (props: TableProps<any>) => {

  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "table": true,
      "table-fixed": props.tableLayout === 'fixed'
    };
    return getClasses(conditions, styles, props.className)
  }, [props]);

  return {classes}
}
