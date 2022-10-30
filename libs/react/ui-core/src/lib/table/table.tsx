import React from 'react'
import { forwardRef } from 'react';
import { TableProps } from './TableProps';
import {useTable} from './useTable'
import TableHeader from './Header/tableHeader'
import TableBody from './Body/tableBody'
import TableFooter from './Footer/tableFooter'

export const Table = forwardRef((props: TableProps<any>, ref: any) => {
  const {classes, sortValue, sortType, sortTable, data} = useTable(props)

  return (
    <table ref={ref} className={classes}>
      <TableHeader columns={props.columns} sortValue={sortValue} sortType={sortType} sortTable={sortTable} />
      <TableBody data={data} columns={props.columns} />
      <TableFooter footer={props.footer} columns={props.columns} dataLength={data.length} />
    </table>
  );
})

