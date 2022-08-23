import { forwardRef, useMemo } from 'react';
import { CardProps } from './CardProps';
import styles from './card.module.scss';

const Card = forwardRef((props: CardProps, ref: any) => {
  const classes = useMemo(()=> {
    const classList = [styles['card']];
    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);
    return classList.join(' ');
  }, [props.className])
  return (
    <div className={classes} ref={ref} style={props.style}>
      {props.children}
    </div>
  );
});

export default Card;
