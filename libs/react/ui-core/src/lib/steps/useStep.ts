import styles from './steps.module.scss';
import { useMemo } from 'react';
import { getClasses } from '../../utils/getClasses';
import { StepProps } from './StepProps';

export function useStep(props: StepProps) {
  const classes = useMemo(() => {
    const conditions = {
      'step': true,
      'step-past': props.state === 'past',
      'step-current': props.state === 'current',
      'step-future': props.state === 'future',
      'step-has-icon': props.iconName !== undefined,
      'step-no-icon': props.iconName === undefined,
    };
    return getClasses(conditions, styles, []);
  }, [props.state]);
  return { classes };
}
