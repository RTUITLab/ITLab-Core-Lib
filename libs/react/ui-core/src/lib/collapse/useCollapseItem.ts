import {useMemo} from 'react';
import { CollapseItemProps } from './CollapseProps';
import styles from './collapse.module.scss';
import {getClasses} from '../../utils/getClasses'

export function useCollapseItem(props: CollapseItemProps, expanded?: boolean) {
  const itemClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "collapse-item": true,
      "collapse-item-expanded": Boolean(expanded),
    };
    return getClasses(conditions, styles, props.className)
  }, [props.className, expanded]);

  const headerClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "collapse-item-header-container": true,
      "collapse-item-header-container-expanded": Boolean(expanded),
      "collapse-item-header-container-contracted": !expanded,
    };
    return getClasses(conditions, styles)
  }, [expanded]);

  return {
    itemClasses,
    headerClasses,
  };
}
