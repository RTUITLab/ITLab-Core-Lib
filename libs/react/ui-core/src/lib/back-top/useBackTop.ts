import styles from './back-top.module.scss';
import { useMemo, useState } from 'react';
import { BackTopProps } from './BackTopProps';

export function useBackTop(props: BackTopProps) {
  /** Used to determine opacity of the button (needed for animation) */
  const [visible, setVisible] = useState<boolean>(false);
  /** Used to hide button completely */
  const [displayed, setDisplayed] = useState<boolean>(false);
  const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout | undefined>();

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

  function hideButton() {
    setVisible(false);
    if (!timeoutRef) {
      const ref = setTimeout(() => {
        setDisplayed(false);
      }, 150);
      setTimeoutRef(ref);
    }
  }

  function showButton() {
    if (timeoutRef) clearTimeout(timeoutRef);
    setDisplayed(true);
    setTimeout(() => {
      setVisible(true);
    }, 10);
  }

  function handleScroll() {
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const threshold = props.threshold || 150;
    if (scroll < threshold && visible) hideButton();
    if (scroll >= threshold && !visible) showButton();
  }

  return { classes, scrollToTop, handleScroll };
}
