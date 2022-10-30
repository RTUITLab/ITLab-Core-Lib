import {useCallback, useEffect, useMemo, useState} from 'react'
import {getClasses} from '../../utils/getClasses'
import styles from './table.module.scss'
import {TableProps, TableSortType} from './TableProps'

export const useTable = (props: TableProps<any>) => {
  const [data, setData] = useState<typeof props.data>(props.data)
  const [sortValue, setSortValue] = useState<string>('')
  const [sortType, setSortType] = useState<TableSortType>('')

  const sortData = useCallback((value: string, type: string) => {
    if (type === 'ascending') {
      return props.data.sort((a: any, b: any) => a[value] > b[value] ? 1 : -1)
    }
    else if (type === 'descending') {
      return props.data.sort((a:any, b:any) => a[value] <= b[value] ? 1 : -1)
    }
    else return props.data
  }, [props.data])

  const sortTable = useCallback(async (value: string, type: string) => {
    if(value === sortValue) {
      if(type === '') {
        setSortType('ascending')
        const sortedData = await sortData(value, 'ascending')
        setData(sortedData)
      }
      else if (type === 'ascending') {
        setSortType('descending')
        const sortedData = await sortData(value, 'descending')
        setData(sortedData)
      }
      else if (type === 'descending'){
        setSortType('')
        setData(props.data)
      }
    }
    else {
      setSortValue(value)
      setSortType('ascending')
      setData(sortData(value, 'ascending'))
    }
    return props.data.sort((a, b) => a[value] > b[value] ? 1 : -1)
  }, [props.data, sortValue, sortData])

  useEffect(() => {
    const setInitialData = async () => {
      if(sortValue !== '') {
        const sortedData = await sortData(sortValue, sortType)
        setData(sortedData)
      }
      else {
        setData(props.data)
      }
    }
    setInitialData()
  }, [props.data])

  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "table": true,
      "table-fixed": props.tableLayout === 'fixed'
    };
    return getClasses(conditions, styles, props.className)
  }, [props]);

  return {classes, data, sortTable, sortType, sortValue}
}
