import {useCallback} from 'react'
import styles from '../table.module.scss'
import {TableHeaderProps} from './tableHeader'
import {getClasses} from '../../../utils/getClasses'

export const useTableHeader = (props: TableHeaderProps<any>) => {

  const getIconClasses = useCallback((title: string) => {
    const conditions:{[index: string]:boolean} = {
      "table-head-sort": true,
      "table-head-sort-active": props.sortValue === title && props.sortType !== '',
      "table-head-sort-ascending": props.sortType === 'ascending',
    };
    return getClasses(conditions, styles)
  }, [props]);

  return {getIconClasses}
}
