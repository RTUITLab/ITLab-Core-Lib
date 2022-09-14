import styles from './back-top.module.scss';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { BackTopProps } from './BackTopProps';
import {getClasses} from '../../utils/getClasses'

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
    const conditions:{[index: string]:boolean} = {
      "back-top": true,
      "back-top-fading": !visible,
      "back-top-hidden": !displayed,
    };
    return getClasses(conditions, styles, props.className)
  }, [props.className, visible, displayed]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  const hideButton = useCallback(() => {
    if (visibleTimeoutRef) {
      clearTimeout(visibleTimeoutRef);
      setVisibleTimeoutRef(undefined);
    }
    setVisible(false);
    const ref = setTimeout(() => {
      setDisplayed(false);
      setDisplayedTimeoutRef(undefined);
    }, 150);
    setDisplayedTimeoutRef(ref);
  }, [visible, displayed, visibleTimeoutRef, displayedTimeoutRef]);

  const showButton = useCallback(() => {
    if (displayedTimeoutRef) {
      clearTimeout(displayedTimeoutRef);
      setDisplayedTimeoutRef(undefined);
    }
    setDisplayed(true);
    const ref = setTimeout(() => {
      setVisible(true);
      setVisibleTimeoutRef(undefined);
    }, 10);
    setVisibleTimeoutRef(ref);
  }, [visible, displayed, visibleTimeoutRef, displayedTimeoutRef]);

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
  }, [props.threshold, handleScroll]);

  return { classes, scrollToTop };
}
