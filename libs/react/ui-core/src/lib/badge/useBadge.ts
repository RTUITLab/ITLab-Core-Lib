import { useMemo } from 'react';
import { BadgeProps } from './BadgeProps';
import styles from './badge.module.scss';

export function useBadge(props: BadgeProps) {
  const classes = useMemo(() => {
    const classList = [styles['badge']];

    const readyClasses: { [index: string]: boolean } = {
      'badge-primary': props.color === 'primary',
      'badge-red': props.color === 'red',
      'badge-green': props.color === 'green',
      'badge-orange': props.color === 'orange',
      'badge-transparent': props.color === 'transparent',
      'badge-solid': props.type === 'solid',
      'badge-outline': props.type === 'outline',
      'badge-light': props.type === 'light',
      'badge-rectangular': props.shape === 'rectangular',
      'badge-circle': props.shape === 'circle',
    };

    for (const i of Object.keys(readyClasses)) {
      if (readyClasses[i]) {
        classList.push(styles[i]);
      }
    }

    if (typeof props.className === 'string') {
      classList.push(props.className);
    } else if (typeof props.className === 'object') {
      classList.push(props.className.join(' '));
    }

    return classList.join(' ');
  }, [props.color, props.type, props.shape, props.className]);

  return classes;
}
