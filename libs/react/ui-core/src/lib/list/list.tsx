import styles from './list.module.scss';
import { forwardRef, useMemo } from 'react';
import { ListProps } from './ListProps';
import { useList } from './useList';

export const List = forwardRef((props: ListProps, ref: any) => {
  const { classes } = useList(props);

  const listContent = useMemo(() => {
    return props.items.map((item) => (
      <li className={styles['list-item']}>{item}</li>
    ));
  }, [props.items]);

  return (
    <>
      {props.type === 'ordered' ? (
        <ol className={classes} style={props.style} ref={ref}>
          {listContent}
        </ol>
      ) : (
        <ul className={classes} style={props.style} ref={ref}>
          {listContent}
        </ul>
      )}
    </>
  );
});
