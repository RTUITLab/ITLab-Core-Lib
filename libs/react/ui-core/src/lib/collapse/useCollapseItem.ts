import { createRef, useEffect, useMemo, useState } from 'react';
import { CollapseItemProps } from './CollapseProps';
import styles from './collapse.module.scss';

export function useCollapseItem(props: CollapseItemProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [defaultContentHeight, setDefaultContentHeight] = useState<number>(0);
  const [contentDisplay, setContentDisplay] = useState<'block' | 'none'>(
    'block'
  );
  const contentRef = createRef<HTMLDivElement>();

  function getDefaultHeight(children: Element[]): number {
    return children.reduce((acc, child) => acc + child.clientHeight, 0);
  }

  useEffect(() => {
    const children = Array.from(contentRef.current!.children);
    console.log(children);
    Promise.resolve().then(() => {
      const height = getDefaultHeight(children);
      console.log(height);
      setContentDisplay('none');
      setDefaultContentHeight(height);
    });
  }, [props.content, props.className, props.style]);

  function open() {
    setExpanded(true);
    setContentDisplay('block');
    setTimeout(() => {
      setContentHeight(defaultContentHeight);
    }, 10);
  }

  function close() {
    setExpanded(false);
    setContentHeight(0);
    setTimeout(() => {
      setContentDisplay('none');
    }, 300);
  }

  function toggleExpanded() {
    if (expanded) close();
    else open();
  }

  const itemClasses = useMemo(() => {
    const classList = [styles['collapse-item']];
    if (expanded) classList.push(styles['collapse-item-expanded']);
    if (typeof props.className === 'string') classList.push(props.className);
    if (typeof props.className === 'object') classList.push(...props.className);
    return classList.join(' ');
  }, [props.className, expanded]);

  const headerClasses = useMemo(() => {
    const classList = [styles['collapse-item-header-container']];
    if (expanded)
      classList.push(styles['collapse-item-header-container-expanded']);
    else classList.push(styles['collapse-item-header-container-contracted']);
    return classList.join(' ');
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
