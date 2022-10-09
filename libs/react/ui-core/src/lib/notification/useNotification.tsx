import React, { useMemo, useRef } from 'react';
import {
  NotificationsProps,
  OpenNotificationProps,
  OpenProps,
} from './NotificationProps';
import { Notifications, NotificationsRef } from './notifications';

export interface notificationApi {
  open: (props: OpenProps) => void;
  info: (props: OpenNotificationProps) => void;
  success: (props: OpenNotificationProps) => void;
  warning: (props: OpenNotificationProps) => void;
  error: (props: OpenNotificationProps) => void;
  close: (key: React.Key) => void;
}

export function useNotification(
  props: NotificationsProps
): [notificationApi, React.ReactElement] {
  const notificationsRef = useRef<NotificationsRef>(null);
  const contextHolder = <Notifications {...props} ref={notificationsRef} />;
  const api = useMemo(() => {
    return {
      open: (props: OpenProps) => notificationsRef.current?.open(props),
      info: (props: OpenNotificationProps) =>
        notificationsRef.current?.open({ ...props, type: 'info' }),
      success: (props: OpenNotificationProps) =>
        notificationsRef.current?.open({ ...props, type: 'success' }),
      warning: (props: OpenNotificationProps) =>
        notificationsRef.current?.open({ ...props, type: 'warning' }),
      error: (props: OpenNotificationProps) =>
        notificationsRef.current?.open({ ...props, type: 'error' }),
      close: (key: React.Key) => notificationsRef.current?.close(key),
    };
  }, []);
  return [api, contextHolder];
}
