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
      'step-clickable': !!props.onClick && props.state !== 'current',
    };
    return getClasses(conditions, styles, []);
  }, [props.state, props.onClick]);
  return { classes };
}
