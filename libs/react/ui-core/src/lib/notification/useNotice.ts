import { NoticeProps } from './NoticeProps';
import { useCallback, useMemo, useState, useEffect } from 'react';
import { getClasses } from '../../utils/getClasses';
import styles from './notification.module.scss';

export function useNotice(props: NoticeProps) {
  const [moving, setMoving] = useState<boolean>(true);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout>();

  const classes = useMemo(() => {
    const conditions = {
      'notice': true,
      'notice-moving': moving,
    };
    return getClasses(conditions, styles, props.className);
  }, [moving, props.className]);

  const iconClasses = useMemo(() => {
    const conditions = {
      'notice-icon': true,
      'notice-icon-info': props.type === 'info',
      'notice-icon-success': props.type === 'success',
      'notice-icon-warning': props.type === 'warning',
      'notice-icon-error': props.type === 'error',
    };
    return getClasses(conditions, styles, []);
  }, [props.type]);

  const iconName = useMemo(() => {
    if (props.type === 'info') return 'information';
    if (props.type === 'success') return 'checkbox-circle';
    if (props.type === 'warning') return 'error-warning';
    if (props.type === 'error') return 'close-circle';
    return '';
  }, [props.type]);

  const close = useCallback(
    (key: React.Key) => {
      if (closeTimeout) clearTimeout(closeTimeout);
      setMoving(true);
      setTimeout(() => props.onClose(key), 300);
    },
    [props.onClose, closeTimeout, moving]
  );

  useEffect(() => {
    if (props.timeout && !closeTimeout) {
      const timeout = setTimeout(() => close(props.id), props.timeout);
      setCloseTimeout(timeout);
    }
  }, [props.timeout, close]);

  useEffect(() => {
    setTimeout(() => setMoving(false), 10);
  }, []);
  return { classes, iconName, iconClasses, close };
}
