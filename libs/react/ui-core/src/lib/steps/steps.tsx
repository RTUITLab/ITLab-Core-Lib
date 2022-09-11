import styles from './steps.module.scss';
import React, { FC, useMemo, useRef } from 'react';
import { forwardRef } from 'react';
import { StepsItemProps, StepsProps } from './StepsProps';
import { useSteps } from './useSteps';
import { StepProps } from './StepProps';
import { useStep } from './useStep';
import Icon from '../icon/icon';

const Step: FC<StepProps> = React.memo((props: StepProps) => {
  const { classes } = useStep(props);

  const figure = useMemo(() => {
    return props.iconName ? (
      <Icon name={props.iconName} className={styles['step-icon']} type="fill" />
    ) : (
      <div className={styles['step-circle']}></div>
    );
  }, [props.iconName]);

  return (
    <div className={classes}>
      <div className={styles['step-figure-container']}>{figure}</div>
      <div className={styles['step-title']}>{props.title}</div>
      {props.subtitle && (
        <div className={styles['step-subtitle']}>{props.subtitle}</div>
      )}
      <div className={styles['step-line']}></div>
    </div>
  );
});

export const Steps = forwardRef((props: StepsProps, ref?: any) => {
  const { classes } = useSteps(props);
  const stepsList = useMemo(() => {
    return props.steps.map((step: StepsItemProps, index: number) => {
      let state: 'past' | 'current' | 'future';
      if (index < props.current) state = 'past';
      else if (index === props.current) state = 'current';
      else state = 'future';
      return (
        <Step {...step} state={state} iconName={props.iconName} key={index} />
      );
    });
  }, [props.steps, props.current, props.iconName]);
  return (
    <div className={classes} style={props.style} ref={ref}>
      {stepsList}
    </div>
  );
});

Steps.defaultProps = { size: 'small' };
