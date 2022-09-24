import styles from './progress.module.scss';
import { useMemo } from 'react';
import { getClasses } from '../../utils/getClasses';
import { ProgressProps } from './ProgressProps';

export function useProgress(props: ProgressProps) {
  const classes = useMemo(() => {
    const conditions = {
      'progress': true,
      'progress-success': props.state === 'success',
      'progress-error': props.state === 'error',
      'progress-regular': props.state === 'progress',
      'progress-radial': props.type === 'radial',
      'progress-linear': props.type === 'linear',
      'progress-small': props.size === 'small',
      'progress-standart': props.size === 'standart',
    };
    return getClasses(conditions, styles, props.className);
  }, [props.state, props.size, props.className, props.type]);

  const fillPortion = useMemo(() => {
    // Rounds to 2 digits.
    const portion = Math.round((props.currentStep / props.steps) * 100) / 100;
    return portion <= 1 ? (portion >= 0 ? portion : 0) : 1;
  }, [props.currentStep, props.steps]);

  const dashArray = useMemo(() => {
    const radius = 72;
    return 2 * Math.PI * radius;
  }, [props.size]);

  const dashOffset = useMemo(() => {
    return dashArray * (1 - fillPortion);
  }, [dashArray, fillPortion]);

  const fillPercentage = useMemo(() => {
    return `${fillPortion * 100}%`;
  }, [fillPortion]);

  const labelText = useMemo(() => {
    return props.format?.(props.currentStep, props.steps);
  }, [props.currentStep, props.steps, props.format]);

  return {
    classes,
    fillPortion,
    fillPercentage,
    labelText,
    dashArray,
    dashOffset,
  };
}
