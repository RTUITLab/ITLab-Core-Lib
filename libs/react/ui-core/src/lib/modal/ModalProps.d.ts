import React, { CSSProperties } from 'react';
import { DefaultParams } from '../../default-types/defaultParams';

export interface ModalProps extends DefaultParams {
  /** Specifies whether to show modal or not */
  visible: boolean;

  /** Title of the modal */
  title: string;

  /** Callback, called when modal should be closed. Must change visible */
  onClose: () => void;

  /** Specifies whether to close modal on background click */
  closeOnBackground?: boolean;

  /** Z-index of the modal */
  zIndex?: number;

  /** Content of the modal */
  children?: React.ReactNode;
}
