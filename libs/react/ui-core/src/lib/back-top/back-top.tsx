import { forwardRef, useMemo } from 'react';
import styles from './back-top.module.scss';
import { BackTopProps } from './BackTopProps';
import { Icon } from '../icon/icon';
import { getAllEvents } from '../../utils/getAllEvents';

const BackTop = forwardRef((props: BackTopProps, ref: any) => {
  const events = useMemo(() => {
    return getAllEvents(props);
  }, [props]);

  const classes = useMemo(() => {
    const classList = [styles['back-top']];
    if (typeof props.className === 'string') classList.push(props.className);
    if (typeof props.className === 'object') classList.push(...props.className);
    return classList.join(' ');
  }, [props.className]);

  return (
    <button {...events} style={props.style} className={classes} ref={ref}>
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
