import React, { useMemo } from 'react';
import { forwardRef } from 'react';
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

  const arrow = (
    <span className={styles['collapse-arrow']}>
      <i className={'ri-arrow-down-s-line'} style={{ fontSize: 24 }} />
    </span>
  );

  return (
    <div className={itemClasses} style={props.style}>
      <div
        className={headerClasses}
        onClick={(e) => {
          toggleExpanded();
        }}
      >
        <div className={styles['collapse-item-header']}>{props.header}</div>
        {arrow}
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
