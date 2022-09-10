import React from 'react';
import { DefaultParams } from '../../default-types/defaultParams';
import { OpenProps } from './NotificationProps';

export interface NoticeProps extends DefaultParams, OpenProps {
  /** Triggered when notice disapears from screen */
  onClose: (key: React.Key) => void;
}
