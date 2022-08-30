import React, { useMemo } from 'react';
import { forwardRef } from 'react';
import Icon from '../icon/icon';
import styles from './collapse.module.scss';
import { CollapseItemProps, CollapseProps } from './CollapseProps';
import { useCollapseItem } from './useCollapseItem';

export const Collapse = forwardRef((props: CollapseProps, ref: any) => {
  const classes = useMemo(() => {
    const classList = [styles['collapse']];
    if (typeof props.className === 'string') classList.push(props.className);
    if (typeof props.className === 'object') classList.push(...props.className);
    return classList.join(' ');
  }, [props.className]);

  return (
    <div className={classes} style={props.style} ref={ref}>
      {props.items.map((item) => {
        return <CollapseItem {...item} />;
      })}
    </div>
  );
});

const CollapseItem = React.memo((props: CollapseItemProps) => {
  const {
    contentRef,
    contentDisplay,
    contentHeight,
    itemClasses,
    headerClasses,
    toggleExpanded,
  } = useCollapseItem(props);
  return (
    <div className={itemClasses} style={props.style}>
      <div className={headerClasses} onClick={toggleExpanded}>
        <div className={styles['collapse-item-header']}>{props.header}</div>
        <Icon
          name={'ri-arrow-down-s-line'}
          className={styles['collapse-arrow']}
          size={24}
        />
      </div>
      <div
        className={styles['collapse-item-content-wrapper']}
        ref={contentRef}
        style={{
          display: contentDisplay,
          height: contentHeight.toString() + 'px',
        }}
      >
        <div className={styles['collapse-item-content']}>{props.content}</div>
      </div>
    </div>
  );
});
