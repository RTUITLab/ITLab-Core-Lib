import { useMemo } from 'react';
import { BadgeProps } from './BadgeProps';
import styles from './badge.module.scss';
import {getClasses} from '../../utils/getClasses'

export function useBadge(props: BadgeProps) {
  const classes = useMemo(() => {
    const readyClasses: { [index: string]: boolean } = {
      'badge': true,
      'badge-primary': props.color === 'primary' || !props.color,
      'badge-red': props.color === 'red',
      'badge-green': props.color === 'green',
      'badge-orange': props.color === 'orange',
      'badge-transparent': props.color === 'transparent',
      'badge-solid': props.type === 'solid',
      'badge-outline': props.type === 'outline' || !props.type,
      'badge-light': props.type === 'light',
      'badge-rectangular': props.shape === 'rectangular' || !props.shape,
      'badge-circle': props.shape === 'circle',
    };
    return getClasses(readyClasses, styles, props.className)
  }, [props.color, props.type, props.shape, props.className]);

  return { classes };
}
