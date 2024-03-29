import { forwardRef, useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../icon/icon';
import styles from './modal.module.scss';
import { ModalProps } from './ModalProps';
import { useModal } from './useModal';

export const Modal = forwardRef((props: ModalProps, ref: any) => {
  const { containerClasses, modalClasses, container, closeBackground } =
    useModal(props);

  return ReactDOM.createPortal(
    <div className={containerClasses} style={{ zIndex: props.zIndex }}>
      <div
        className={styles['modal-background']}
        onClick={closeBackground}
      ></div>
      <div className={modalClasses} style={props.style} ref={ref}>
        <div className={styles['modal-header-container']}>
          <div className={styles['modal-header']}>{props.title}</div>
          <Icon
            className={styles['modal-close-icon']}
            name="Close"
            size={24}
            onClick={props.onClose}
          />
        </div>
        {props.children}
      </div>
    </div>,
    container
  );
});

Modal.defaultProps = { closeOnBackground: true, zIndex: 1000 };
