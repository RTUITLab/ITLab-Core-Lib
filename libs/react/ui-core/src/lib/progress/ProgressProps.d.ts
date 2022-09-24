import { DefaultParams } from '../../default-types/defaultParams';

export interface ProgressProps extends DefaultParams {
  /** Current step of the progress */
  currentStep: number;
  /** Total amount of steps */
  steps: number;
  /** Type of the progress */
  type?: 'linear' | 'radial';
  /** Size of the progress */
  size?: 'small' | 'standart';
  /** State of the process shown by progress */
  state?: 'progress' | 'error' | 'success';
  /** Formatter to show progress. By default x/y */
  format?: (currentStep: number, steps: number) => string;
}
