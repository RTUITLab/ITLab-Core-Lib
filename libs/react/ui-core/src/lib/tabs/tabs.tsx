import styles from './tabs.module.scss';
import React, {forwardRef, useMemo} from 'react'
import {TabItemProps, TabsProps} from './TabsProps'
import {useTabs, useTabsProps} from './useTabs'

export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {

  const state = useTabs(props);

  return (<div>
    <div className={styles['tabs']} ref={ref}>
      {props.items.map((item, index) => {
        return <React.Fragment key={index}><TabItem item={item} props={props} state={state} /></React.Fragment>
      })}
    </div>
  </div>);
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
        <span className={styles['tab-item-badge']}>{item.badge}</span>
      }
    </div>
  )
}
