import React from 'react';
import { DefaultParams } from '../../default-types/defaultParams';

export interface AlertProps extends DefaultParams {
  /** Title of the alert */
  title: string;

  /** Subtitle of the alert */
  subtitle?: string;

  /** Type of the alert */
  type?: 'info' | 'success' | 'warning' | 'error';

  /** Specifies whether alert is closable or not */
  closable?: boolean;

  /** Callback, called when close button is pressed */
  onClose?: () => void;

  /** Other content of the alert */
  children?: React.ReactNode;
}
