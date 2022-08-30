import { forwardRef } from 'react';
import { BackTopProps } from './BackTopProps';
import { Icon } from '../icon/icon';
import { useBackTop } from './useBackTop';

export const BackTop = forwardRef((props: BackTopProps, ref: any) => {
  const { classes, scrollToTop } = useBackTop(props);

  return (
    <button
      style={props.style}
      className={classes}
      ref={ref}
      onClick={scrollToTop}
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

