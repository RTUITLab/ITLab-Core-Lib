import { forwardRef, useMemo } from 'react';
import styles from './back-top.module.scss';
import { BackTopProps } from './BackTopProps';
import { Icon } from '../icon/icon';

const BackTop = forwardRef((props: BackTopProps, ref: any) => {
  const classes = useMemo(() => {
    const classList = [styles['back-top']];
    if (typeof props.className === 'string') classList.push(props.className);
    if (typeof props.className === 'object') classList.push(...props.className);
    return classList.join(' ');
  }, [props.className]);

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button
      style={props.style}
      className={classes}
      ref={ref}
      onClick={(e) => {
        scrollToTop();
      }}
    >
      <Icon
        name={'arrow-up-circle-line'}
        type={'line'}
        color={'general-light'}
        size={20}
      />
    </button>
  );
});

export default BackTop;
