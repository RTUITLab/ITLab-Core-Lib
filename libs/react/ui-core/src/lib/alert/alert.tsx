import { forwardRef, useMemo, useState } from 'react';
import Icon from '../icon/icon';
import styles from './alert.module.scss';
import { AlertProps } from './AlertProps';
import { useAlert } from './useAlert';
import { ReactComponent as CloseIcon } from '../../../../../../assets/close.svg';

export const Alert = forwardRef((props: AlertProps, ref?: any) => {
  const { classes, visible, iconName, closeAlert } = useAlert(props);

  return (
    <>
      {visible && (
        <div className={classes} style={props.style} ref={ref}>
          <Icon
            name={iconName}
            className={styles['alert-icon']}
            size={20}
            type="fill"
          />
          <div className={styles['alert-content']}>
            <div className={styles['alert-header']}>{props.title}</div>
            {props.subtitle && (
              <div className={styles['alert-subtitle']}>{props.subtitle}</div>
            )}
            {props.children && (
              <div className={styles['alert-children']}>{props.children}</div>
            )}
          </div>
          {props.closable && (
            <div
              className={styles['alert-close-icon-container']}
              onClick={closeAlert}
            >
              <CloseIcon className={styles['alert-close-icon']} />
            </div>
          )}
        </div>
      )}
    </>
  );
});

Alert.defaultProps = { type: 'info', closable: true };
