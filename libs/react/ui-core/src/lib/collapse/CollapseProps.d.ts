import React from 'react';
import { DefaultParams } from '../../default-types/defaultParams';

export interface CollapseItemProps extends DefaultParams {
  /** Header of the collapse item */
  header: string;

  /** Content of the collapse item */
  content: string | React.ReactNode;
}

export interface CollapseProps extends DefaultParams {
  /** Items of the collapse */
  items: CollapseItemProps[];
}
