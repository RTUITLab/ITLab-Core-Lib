import styles from './tabs.module.scss';
import React, {forwardRef, useMemo} from 'react'
import {TabItemProps, TabsProps} from './TabsProps'
import {useTabs, useTabsProps} from './useTabs'
import {Badge} from '../badge/badge'

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
    <div className={`${state.classes} ${borderClasses}`} ref={ref} style={props.style}>
      {props.items.map((item, index) => {
        return <React.Fragment key={index}><TabItem item={item} props={props} state={state} /></React.Fragment>
      })}
    </div>
  );
})

const TabItem = (localProps: { item: TabItemProps, props: TabsProps, state: useTabsProps }) => {
  const {item, props, state} = localProps

  const classes = useMemo(() => {
    const classList = [];
    const conditions:{[index: string]:boolean} = {
      "tab-item-active": true,

      "tab-item-active-small": props.size === 'small',
      "tab-item-active-medium": props.size === 'medium',
      "tab-item-active-large": props.size === 'large',
    };

    if(!props.size) classList.push(styles['tab-item-active-medium']);
    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });
    return classList.join(' ');;
  },[props])

  return (
    <div className={`${state.itemClasses} ${state.activeItem === item.key ? classes : ''}`} onClick={(e) => state.handleClick(item.key, e)} key={item.key}>
      {item.label}
      {item.badge &&
        <Badge className={styles['tab-item-badge']} type={'solid'}  shape={'circle'} color={'red'}>{item.badge < 100 ? item.badge : '99+'}</Badge>
      }
    </div>
  )
}
