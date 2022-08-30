import styles from './list.module.scss';
import { useMemo } from 'react';
import { ListProps } from './ListProps';
import { getClasses } from '../../utils/getClasses';

export function useList(props: ListProps) {
  const classes = useMemo(() => {
    const conditions: { [index: string]: boolean } = {
      'list': true,
      'list-unordered': props.type === 'unordered' || !props.type,
      'list-ordered': props.type === 'ordered',
      'list-ordered-small': props.type === 'ordered' && props.items.length < 10,
      'list-ordered-medium':
        props.type === 'ordered' &&
        props.items.length >= 10 &&
        props.items.length < 100,
      'list-ordered-large':
        props.type === 'ordered' &&
        props.items.length >= 100 &&
        props.items.length < 1000,
      'list-table': props.type === 'table',
    };
    return getClasses(conditions, styles, props.className);
  }, [props.className, props.type, props.items]);
  return { classes };
}
