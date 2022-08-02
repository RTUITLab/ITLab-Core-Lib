import styles from './tabs.module.scss';
import React, {forwardRef} from 'react'
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

  return (
    <div className={state.itemClasses} onClick={() => state.setActiveItem(item.key)} key={item.key}>
      {item.label}
      {item.badge &&
        <span>{item.badge}</span>
      }
    </div>
  )
}
