import { DefaultParams } from '../../default-types/defaultParams';
import { ReactNode } from 'react';

export interface BadgeProps extends DefaultParams {
  /** Shape of the badge*/
  shape?: 'rectangular' | 'circle';

  /** Background of the badge*/
  type?: 'solid' | 'outline' | 'light';

  /** Color of the badge */
  color?: 'primary' | 'red' | 'green' | 'orange' | 'transparent';

  /** Text inside of the badge */
  children: string | ReactNode;
}
