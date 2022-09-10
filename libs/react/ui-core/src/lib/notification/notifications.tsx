import styles from './notification.module.scss';
import React, { forwardRef, useMemo, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { NoticeProps } from './NoticeProps';
import { NotificationsProps, OpenProps } from './NotificationProps';
import { useNotice } from './useNotice';
import { useNotificationLogic } from './useNotificationLogic';
import Icon from '../icon/icon';
import { ReactComponent as CloseIcon } from '../../../../../../assets/close.svg';

const Notice = forwardRef((props: NoticeProps, ref?: any) => {
  const { classes, iconName, iconClasses, close } = useNotice(props);
  return (
    <div className={classes} ref={ref} style={props.style}>
      <div className={styles['notice-main-info']}>
        <Icon name={iconName} className={iconClasses} size={20} type="fill" />
        <div className={styles['notice-titles']}>
          <div className={styles['notice-title']}>{props.title}</div>
          {props.subtitle && (
            <div className={styles['notice-subtitle']}>{props.subtitle}</div>
          )}
        </div>
        {props.closable && (
          <div
            className={styles['notice-close-icon-container']}
            onClick={() => close(props.id)}
          >
            <CloseIcon className={styles['notice-close-icon']} />
          </div>
        )}
      </div>
      {props.children && (
        <>
          <div className={styles['notice-horizontal-line']}></div>
          <div className={styles['notice-children']}>{props.children}</div>
        </>
      )}
    </div>
  );
});

Notice.defaultProps = { type: 'info', closable: true };

export interface NotificationsRef {
  open: (props: OpenProps) => void;
  close: (close: React.Key) => void;
}

export const Notifications = forwardRef<NotificationsRef, NotificationsProps>(
  (props: NotificationsProps, ref: any) => {
    const { classes, container, notices, open, close } =
      useNotificationLogic(props);

    const noticesList = useMemo(() => {
      if (props.position === 'bottom')
        return notices
          .slice(0)
          .reverse()
          .map((notice) => <Notice {...notice} key={notice.id} />);
      return notices.map((notice) => <Notice {...notice} key={notice.id} />);
    }, [notices, props.position]);

    useImperativeHandle(ref, () => ({
      open: (props: OpenProps) => {
        open(props);
      },
      close: (key: React.Key) => {
        close(key);
      },
    }));

    return createPortal(
      <div className={classes} ref={ref} style={props.style}>
        {noticesList}
      </div>,
      container
    );
  }
);

Notifications.defaultProps = { position: 'top' };
