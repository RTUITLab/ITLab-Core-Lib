import styles from './progress.module.scss';
import { forwardRef, memo, useMemo } from 'react';
import { ProgressProps } from './ProgressProps';
import { useProgress } from './useProgress';
import Icon from '../icon/icon';

const LinearBar = memo(({ fillPercentage }: { fillPercentage: string }) => {
  return (
    <div className={styles['figure']}>
      <div className={styles['track']}></div>
      <div
        className={styles['indicator']}
        style={{ width: fillPercentage }}
      ></div>
    </div>
  );
});

const RadialBar = memo(
  ({ dashArray, dashOffset }: { dashArray: number; dashOffset: number }) => {
    return (
      <svg
        viewBox="0 0 164 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles['figure']}
      >
        <circle
          className={styles['track']}
          cx="82"
          cy="82"
          r="72"
          strokeWidth="20"
        />
        <circle
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          className={styles['indicator']}
          strokeLinecap="round"
          cx="82"
          cy="82"
          r="72"
          strokeWidth="20"
        />
      </svg>
    );
  }
);

const Label = memo(
  ({
    labelText,
    state,
    type,
    minWidth,
  }: {
    labelText?: string;
    state?: 'progress' | 'error' | 'success';
    type?: 'linear' | 'radial';
    minWidth?: string;
  }) => {
    const content = useMemo(() => {
      switch (state) {
        case 'progress':
          return (
            <div
              className={styles['label']}
              {...(type === 'linear' && { style: { minWidth: minWidth } })}
            >
              {labelText}
            </div>
          );
          break;
        case 'error':
          return (
            <Icon
              name={type === 'linear' ? 'close-circle' : 'close'}
              type="fill"
              className={styles['label-icon']}
            />
          );
          break;
        case 'success':
          return (
            <Icon
              name={type === 'linear' ? 'checkbox-circle' : 'check'}
              type="fill"
              className={styles['label-icon']}
            />
          );
          break;
        default:
          return <div className={styles['label']}>{labelText}</div>;
          break;
      }
    }, [labelText, state, type]);
    return content;
  }
);

export const Progress = forwardRef((props: ProgressProps, ref: any) => {
  const { classes, fillPercentage, labelText, dashArray, dashOffset } =
    useProgress(props);
  return (
    <div className={classes} ref={ref} style={props.style}>
      {props.type === 'linear' ? (
        <LinearBar fillPercentage={fillPercentage} />
      ) : (
        <RadialBar dashArray={dashArray} dashOffset={dashOffset} />
      )}
      <Label
        labelText={labelText}
        state={props.state}
        type={props.type}
        minWidth={props.minLabelWidth}
      />
    </div>
  );
});

Progress.defaultProps = {
  size: 'standart',
  type: 'linear',
  state: 'progress',
  minLabelWidth: '40px',
  format: (currentStep: number, steps: number) => `${currentStep}/${steps}`,
};
