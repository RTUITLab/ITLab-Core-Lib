import React from 'react';
import { DefaultParams } from '../../default-types/defaultParams';

export interface StepsItemProps {
  /** Title of the step */
  title: string;

  /** Subtitle of the step */
  subtitle?: string;

  /** Icon name, if not specified will show hollow circle */
  iconName?: string;
}

export interface StepsProps extends DefaultParams {
  /** Steps to show */
  steps: StepsItemProps[];

  /** Index of the current step */
  current: number;

  /** Size of the steps */
  size?: 'small' | 'medium' | 'large';

  /** Callback, triggered when step is clicked */
  onChange?: (index: number) => void;
}
