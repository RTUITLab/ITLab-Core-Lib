import { DefaultParams } from '../../default-types/defaultParams';

export interface SpinnerProps extends DefaultParams {
  /** Size of the spinner */
  size?: 'extra large' | 'large' | 'medium' | 'small';

  /** Whether to show logo or not */
  displayLogo?: boolean;
}
