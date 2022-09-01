import { ModalProps } from './ModalProps';
import styles from './modal.module.scss';
import { useMemo } from 'react';
import { getClasses } from '../../utils/getClasses';

export function useModal(props: ModalProps) {
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

  return { containerClasses, backgroundClasses, modalClasses };
}
