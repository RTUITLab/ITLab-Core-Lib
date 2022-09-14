import { createRef, useCallback, useEffect, useMemo, useState } from 'react';
import { CollapseItemProps } from './CollapseProps';
import styles from './collapse.module.scss';
import {getClasses} from '../../utils/getClasses'

export function useCollapseItem(props: CollapseItemProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [defaultContentHeight, setDefaultContentHeight] = useState<number>(0);
  const [contentDisplay, setContentDisplay] = useState<'block' | 'none'>(
    'block'
  );
  const contentRef = createRef<HTMLDivElement>();

  const getDefaultHeight = useCallback((children: Element[]): number => {
    return children.reduce((acc, child) => acc + child.clientHeight, 0);
  }, [])

  useEffect(() => {
    if(contentRef.current) {
      const children = Array.from(contentRef.current.children);
      Promise.resolve().then(() => {
        const height = getDefaultHeight(children);
        setContentDisplay('none');
        setDefaultContentHeight(height);
      });
    }
  }, []);

  const open = useCallback(() => {
    setExpanded(true);
    setContentDisplay('block');
    setTimeout(() => {
      setContentHeight(defaultContentHeight);
    }, 10);
  }, [defaultContentHeight]);

  const close = useCallback(() => {
    setExpanded(false);
    setContentHeight(0);
    setTimeout(() => {
      setContentDisplay('none');
    }, 150);
  }, []);

  const toggleExpanded = useCallback(() => {
    if (expanded) close();
    else open();
  }, [expanded, open, close]);

  const itemClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "collapse-item": true,
      "collapse-item-expanded": expanded,
    };
    return getClasses(conditions, styles, props.className)
  }, [props.className, expanded]);

  const headerClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "collapse-item-header-container": true,
      "collapse-item-header-container-expanded": expanded,
      "collapse-item-header-container-contracted": !expanded,
    };
    return getClasses(conditions, styles)
  }, [expanded]);

  return {
    contentRef,
    contentDisplay,
    contentHeight,
    itemClasses,
    headerClasses,
    toggleExpanded,
  };
}
