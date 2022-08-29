import styles from './list.module.scss';
import { useMemo } from 'react';
import { ListProps } from './ListProps';

export function useList(props: ListProps) {
  const classes = useMemo(() => {
    const classList = [styles['list']];

    const conditions: { [index: string]: boolean } = {
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

    Object.keys(conditions).forEach((key: string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if (typeof props.className === 'string') classList.push(props.className);
    if (typeof props.className === 'object') classList.push(...props.className);
    return classList.join(' ');
  }, [props.className, props.type, props.items]);
  return { classes };
}
