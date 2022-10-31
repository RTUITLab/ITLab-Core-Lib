import {useCallback} from 'react'
import styles from '../table.module.scss'
import {TableHeaderProps} from './tableHeader'
import {getClasses} from '../../../utils/getClasses'

export const useTableHeader = (props: TableHeaderProps<any>) => {

  const getIconClasses = useCallback((dataIndex: string) => {
    const conditions:{[index: string]:boolean} = {
      "table-head-sort": true,
      "table-head-sort-active": props.sortValue === dataIndex && props.sortType !== '',
      "table-head-sort-ascending": props.sortValue === dataIndex && props.sortType === 'ascending',
    };
    return getClasses(conditions, styles)
  }, [props]);

  return {getIconClasses}
}
