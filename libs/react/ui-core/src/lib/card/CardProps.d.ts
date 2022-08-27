import React, { CSSProperties } from 'react';
import { DefaultParams } from '../../default-types/defaultParams';

export interface CardProps extends DefaultParams {

  /** Content of the card */
  children: React.ReactNode;
}
