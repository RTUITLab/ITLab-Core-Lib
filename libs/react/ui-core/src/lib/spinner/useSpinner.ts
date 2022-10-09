import { useMemo } from 'react';
import { getClasses } from '../../utils/getClasses';
import { SpinnerProps } from './SpinnerProps';
import styles from './spinner.module.scss';

export function useSpinner(props: SpinnerProps) {
  const classes = useMemo(() => {
    const conditions = {
      'spinner-container': true,
      'spinner-container-small': props.size === 'small',
      'spinner-container-medium': props.size === 'medium',
      'spinner-container-large': props.size === 'large',
      'spinner-container-extra': props.size === 'extra large',
    };
    return getClasses(conditions, styles, props.className);
  }, [props.className, props.size]);
  return { classes };
}
