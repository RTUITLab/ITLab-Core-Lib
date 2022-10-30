import React from 'react'
import { forwardRef } from 'react';
import { TableProps } from './TableProps';
import {useTable} from './useTable'
import TableHeader from './Header/tableHeader'
import TableBody from './Body/tableBody'
import TableFooter from './Footer/tableFooter'

export const Table = forwardRef((props: TableProps<any>, ref: any) => {
  const {classes} = useTable(props)

  return (
    <table ref={ref} className={classes}>
      <TableHeader columns={props.columns} />
      <TableBody data={props.data} columns={props.columns} />
      <TableFooter footer={props.footer} columns={props.columns} dataLength={props.data.length} />
    </table>
  );
})

