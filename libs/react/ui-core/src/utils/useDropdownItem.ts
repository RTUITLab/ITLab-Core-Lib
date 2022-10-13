import { createRef, useCallback, useEffect, useState } from 'react';

export function useDropdownItem() {
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

  const setDefaultParams = useCallback(() => {
    if(contentRef.current) {
      const children = Array.from(contentRef.current.children);
      Promise.resolve().then(() => {
        const height = getDefaultHeight(children);
        setContentDisplay('none');
        setDefaultContentHeight(height);
      });
    }
  }, [contentRef, getDefaultHeight])

  useEffect(() => {
    setDefaultParams()
    window.addEventListener('resize', () => setDefaultParams())

    return () => {
      window.removeEventListener('resize', () => setDefaultParams())
    }
  }, [setDefaultParams]);

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

  return {
    contentRef,
    contentDisplay,
    contentHeight,
    toggleExpanded,
    expanded,
    defaultContentHeight
  };
}
