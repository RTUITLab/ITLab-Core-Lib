import React from 'react';
import { DefaultParams } from '../../default-types/defaultParams';

export interface CollapseItemProps extends DefaultParams {
  header: string;
  content: string | React.ReactNode;
}

export interface CollapseProps extends DefaultParams {
  items: CollapseItemProps[];
}
