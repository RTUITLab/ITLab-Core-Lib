import styles from './alert.module.scss';
import { useCallback, useMemo, useState } from 'react';
import { AlertProps } from './AlertProps';
import { getClasses } from '../../utils/getClasses';

export function useAlert(props: AlertProps) {
  const [visible, setVisible] = useState<boolean>(true);
  const [status, setStatus] = useState<'idle' | 'closing'>('idle');

  const classes = useMemo(() => {
    const conditions = {
      'alert': true,
      'alert-info': props.type === 'info',
      'alert-success': props.type === 'success',
      'alert-warning': props.type === 'warning',
      'alert-error': props.type === 'error',
      'alert-closing': status === 'closing',
    };
    return getClasses(conditions, styles, props.className);
  }, [props.type, props.className, status]);

  const iconName = useMemo(() => {
    if (props.type === 'info') return 'information';
    if (props.type === 'success') return 'checkbox-circle';
    if (props.type === 'warning') return 'error-warning';
    if (props.type === 'error') return 'close-circle';
    return '';
  }, [props.type]);

  const closeAlert = useCallback(() => {
    setStatus('closing');
    props.onClose?.();
    setTimeout(() => {
      setVisible(false);
    }, 150);
  }, [status, visible, props.onClose]);
  return { classes, visible, iconName, closeAlert };
}
