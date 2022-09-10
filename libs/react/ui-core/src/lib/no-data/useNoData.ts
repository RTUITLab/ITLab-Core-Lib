import {NoDataProps} from './NoDataProps'
import {useMemo} from 'react'
import {getClasses} from '../../utils/getClasses'
import styles from './no-data.module.scss'

export const useNoData = (props:NoDataProps) => {

  const classes = useMemo(() => {
    return getClasses({ "nodata": true}, styles, props.className)
  }, [props.className]);

  return {classes}
}
