import styles from './spinner.module.scss';
import { forwardRef } from 'react';
import { ReactComponent as Logo } from '../../../../../../assets/logo.svg';
import { SpinnerProps } from './SpinnerProps';
import { useSpinner } from './useSpinner';

export const Spinner = forwardRef((props: SpinnerProps, ref?: any) => {
  const { classes } = useSpinner(props);
  return (
    <div className={classes} ref={ref} style={props.style}>
      <div className={styles['spinner']}>
        <div className={styles['spinner-cap']}></div>
        <div className={styles['spinner-bottom-left']}></div>
        <div className={styles['spinner-bottom-right']}></div>
        <div className={styles['spinner-top-left']}></div>
      </div>
      {props.displayLogo && <Logo className={styles['spinner-logo']} />}
    </div>
  );
});

Spinner.defaultProps = { size: 'extra large', displayLogo: true };
