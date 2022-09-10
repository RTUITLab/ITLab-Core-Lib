import { ModalProps } from './ModalProps';
import styles from './modal.module.scss';
import { useMemo, useState, useEffect, useCallback } from 'react';
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

  const modalClasses = useMemo(() => {
    const conditions = { modal: true };
    return getClasses(conditions, styles, props.className);
  }, [props.className]);

  const closeBackground = useCallback(() => {
    if (props.closeOnBackground) props.onClose();
  }, [props.onClose, props.closeOnBackground]);

  useEffect(() => {
    container.classList.add('modal-root');
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return {
    containerClasses,
    modalClasses,
    container,
    closeBackground,
  };
}
