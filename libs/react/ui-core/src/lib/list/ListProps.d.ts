import React from 'react';
import { DefaultParams } from '../../default-types/defaultParams';

export interface ListProps extends DefaultParams {
  /** Type of the list */
  type?: 'unordered' | 'ordered' | 'table';

  /** Content of the list */
  items: string[] | React.ReactNode[];
}
