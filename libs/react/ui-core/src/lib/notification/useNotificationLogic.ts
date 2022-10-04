import { useCallback, useEffect, useMemo, useState } from 'react';
import { NotificationsProps, OpenProps } from './NotificationProps';
import styles from './notification.module.scss';
import { getClasses } from '../../utils/getClasses';
import { NoticeProps } from './NoticeProps';

export function useNotificationLogic(props: NotificationsProps) {
  const [notices, setNotices] = useState<NoticeProps[]>([]);
  const [container] = useState(() => {
    return document.createElement('div');
  });

  useEffect(() => {
    container.classList.add('notifications-root');
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  const close = useCallback(
    (key: React.Key) => {
      setNotices((current) => current.filter((notice) => notice.id !== key));
    },
    [notices]
  );

  const open = useCallback(
    (openProps: OpenProps) => {
      const notice: NoticeProps = {
        ...openProps,
        onClose: close,
      };
      setNotices((current) => {
        return [notice, ...current];
      });
    },
    [notices, props.position]
  );

  const classes = useMemo(() => {
    const conditions = {
      'notifications': true,
      'notifications-top': props.position === 'top',
      'notifications-bottom': props.position === 'bottom',
    };
    return getClasses(conditions, styles, props.className);
  }, [props.className, props.position]);

  return { classes, container, notices, open, close };
}
