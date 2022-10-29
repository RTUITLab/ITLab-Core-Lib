import { forwardRef } from 'react';
import styles from './table.module.scss';
import { TableProps } from './TableProps';

export const Table = forwardRef((props: TableProps, ref: any) => {
  return (
    <table ref={ref} className={styles['container']}>

    </table>
  );
})

