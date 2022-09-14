import { DefaultParams } from '../../default-types/defaultParams';

export interface NotificationsProps extends DefaultParams {
  /** Position of the notifications */
  position?: 'top' | 'bottom';

  /** Z-index of the container */
  zIndex?: number;
}

export interface OpenProps extends OpenNotificationProps {
  /** Type of the notice */
  type?: 'info' | 'success' | 'warning' | 'error';
}

export interface OpenNotificationProps extends DefaultParams {
  /** Unique id */
  id: React.Key;

  /** Title of the notice */
  title: string;

  /** Subtitle of the notice */
  subtitle?: string;

  /** Whether to show close button or not */
  closable?: boolean;

  /** Time before notice start to disapear, in ms */
  timeout?: number;

  /** Other content of the notice */
  children?: React.ReactNode;
}
