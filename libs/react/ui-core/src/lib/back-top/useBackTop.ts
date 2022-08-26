import styles from './back-top.module.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { BackTopProps } from './BackTopProps';

export function useBackTop(props: BackTopProps) {
  /** Used to determine opacity of the button (needed for animation) */
  const [visible, setVisible] = useState<boolean>(false);
  /** Used to hide button completely */
  const [displayed, setDisplayed] = useState<boolean>(false);
  const [visibleTimeoutRef, setVisibleTimeoutRef] = useState<
    NodeJS.Timeout | undefined
  >();
  const [displayedTimeoutRef, setDisplayedTimeoutRef] = useState<
    NodeJS.Timeout | undefined
  >();

  const classes = useMemo(() => {
    const classList = [styles['back-top']];
    if (!visible) classList.push(styles['back-top-fading']);
    if (!displayed) classList.push(styles['back-top-hidden']);
    if (typeof props.className === 'string') classList.push(props.className);
    if (typeof props.className === 'object') classList.push(...props.className);
    return classList.join(' ');
  }, [props.className, visible, displayed]);

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const hideButton = useCallback(() => {
    if (visibleTimeoutRef) {
      clearTimeout(visibleTimeoutRef);
      setVisibleTimeoutRef(undefined);
    }
    setVisible(false);
    const ref = setTimeout(() => {
      setDisplayed(false);
    }, 150);
    setDisplayedTimeoutRef(ref);
  }, [visible, displayed]);

  const showButton = useCallback(() => {
    if (displayedTimeoutRef) {
      clearTimeout(displayedTimeoutRef);
      setDisplayedTimeoutRef(undefined);
    }
    setDisplayed(true);
    const ref = setTimeout(() => {
      setVisible(true);
    }, 10);
    setVisibleTimeoutRef(ref);
  }, [visible, displayed]);

  const handleScroll = useCallback(() => {
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const threshold = props.threshold || 150;
    if (scroll < threshold && visible && !displayedTimeoutRef) hideButton();
    if (scroll >= threshold && !visible && !visibleTimeoutRef) showButton();
  }, [props.threshold, hideButton, showButton]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    props.threshold,
    handleScroll,
  ]);

  return { classes, scrollToTop };
}
