import { forwardRef } from 'react';
import { BadgeProps } from './BadgeProps';
import { useBadge } from './useBadge';

const Badge = forwardRef((props: BadgeProps, ref: any) => {
  const classes = useBadge(props);
  return (
    <span className={classes} ref={ref} style={props.style}>
      {props.children}
    </span>
  );
});

export default Badge;
