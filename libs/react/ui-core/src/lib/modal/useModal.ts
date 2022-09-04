import { ModalProps } from './ModalProps';
import styles from './modal.module.scss';
import { useMemo, useState, useEffect } from 'react';
import { getClasses } from '../../utils/getClasses';

export function useModal(props: ModalProps) {
  const [container] = useState(() => {
    return document.createElement('div');
  });
  const containerClasses = useMemo(() => {
    const conditions = {
      'modal-container': true,
      'modal-container-visible': props.visible,
    };
    return getClasses(conditions, styles, []);
  }, [props.visible]);

  const backgroundClasses = useMemo(() => {
    const conditions = {
      'modal-background': true,
      'modal-background-clickable': props.closeOnBackground === true,
    };
    return getClasses(conditions, styles, []);
  }, [props.closeOnBackground]);

  const modalClasses = useMemo(() => {
    const conditions = { 'modal': true };
    return getClasses(conditions, styles, props.className);
  }, [props.className]);

  useEffect(() => {
    container.classList.add('modal-root');
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return { containerClasses, backgroundClasses, modalClasses, container };
}
