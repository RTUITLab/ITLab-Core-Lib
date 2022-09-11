import styles from './steps.module.scss';
import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { getClasses } from '../../utils/getClasses';
import { StepsProps } from './StepsProps';

export function useSteps(props: StepsProps) {
  const classes = useMemo(() => {
    const conditions = {
      steps: true,
      'steps-small': props.size === 'small',
      'steps-medium': props.size === 'medium',
      'steps-large': props.size === 'large',
    };
    return getClasses(conditions, styles, props.className);
  }, [props.size, props.className]);
  return { classes };
}
