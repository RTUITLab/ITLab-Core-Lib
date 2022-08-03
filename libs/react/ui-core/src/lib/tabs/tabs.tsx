import styles from './tabs.module.scss';
import React, {forwardRef, useMemo} from 'react'
import {TabItemProps, TabsProps} from './TabsProps'
import {useTabs, useTabsProps} from './useTabs'

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const state = useTabs(props);

  const borderClasses=useMemo(() => {
    const classes = []
    if(state.activeItem === props.items[0].key){
      classes.push(styles['tabs-border-left'])
    }
    if(state.activeItem === props.items[props.items.length - 1].key){
      classes.push(styles['tabs-border-right'])
    }
    return classes.join(' ');
  },[props, state.activeItem])

  return (
    <div className={`${state.classes} ${borderClasses}`} ref={ref}>
      {props.items.map((item, index) => {
        return <React.Fragment key={index}><TabItem item={item} props={props} state={state} /></React.Fragment>
      })}
    </div>
  );
})

const TabItem = (localProps: { item: TabItemProps, props: TabsProps, state: useTabsProps }) => {
  const {item, props, state} = localProps

  const classes = useMemo(() => {
    const classList = [styles['tab-item-active']];
    if(!props.size) classList.push(styles['tab-item-active-medium']);
    return classList.join(' ');;
  },[props.items])

  return (
    <div className={`${state.itemClasses} ${state.activeItem === item.key && classes}`} onClick={() => state.setActiveItem(item.key)} key={item.key}>
      {item.label}
      {item.badge &&
        <span className={styles['tab-item-badge']}>{item.badge < 100 ? item.badge : '99+'}</span>
      }
    </div>
  )
}
