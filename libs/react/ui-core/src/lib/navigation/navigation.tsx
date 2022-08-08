import styles from './navigation.module.scss';
import React, {createRef, forwardRef, useEffect, useMemo, useState} from "react";
import {NavigationItem, NavigationLabel, NavigationProps} from "./NavigationProps";
import {useNavigation, useNavigationProps} from "./useNavigation";
import {useMenuItem} from "./useMenuItem";


export const Navigation = forwardRef<HTMLDivElement, NavigationProps>((props, ref) => {

  const state = useNavigation(props);

  const parentStyles=useMemo(() => {
    const classes = [styles['navigation']];
    if(props.type==="horizontal"){
      classes.push(styles['navigation-horizontal'])
    }
    return classes;
  },[props])

  return (<div>
    <div className={parentStyles.join(" ")} ref={ref}>
      {props.items.map((item, index) => {
        return <React.Fragment key={index}><MenuItem item={item} props={props} state={state}/></React.Fragment>
      })}
    </div>
  </div>);
})

function MenuItem(localProps: { item: NavigationItem, props: NavigationProps, state: useNavigationProps }) {
  const {
    contentItemClasses,
    item,
    props,
    state,
    submenu,
    submenuHeight,
    submenuDisplay,
    icon,
    onMenuClick,
    closeItem,
    submenuClick
  } = useMenuItem(localProps);

  const classes = useMemo(() => {
    const classList = [styles['navigation-item']];
    if(item.disabled){
      classList.push(styles['navigation-item-disabled'])
    }
    return classList;
  },[props.items])

  return (
    <div className={classes.join(" ")} key={item.key}>
      <MenuItemContent strings={contentItemClasses} onClick={onMenuClick} icon={icon} item={item}/>
      <div style={{height: submenuHeight, display: submenuDisplay}} ref={submenu}
           className={styles['navigation-item-submenu']}>
        {item.list?.map((item) => {
          return <SubmenuButton key={item.key}
                                onClick={(e) => submenuClick(item.key, e)} item={item}
                                state={state}/>
        })}
        {item.sections?.map((item) => {
          return <React.Fragment key={item.title}>
            <div
              className={styles['navigation-item-submenu-title']}
            >{item.title}</div>
            {item.items?.map((item) => {
              return <SubmenuButton key={item.key} onClick={(e) => submenuClick(item.key, e)}
                                    item={item}
                                    state={state}/>
            })}
          </React.Fragment>
        })}
      </div>
    </div>
  )
}

function SubmenuButton(props: { onClick: (e: React.MouseEvent<HTMLElement>) => void, item: NavigationLabel, state: useNavigationProps }) {

  const classes = useMemo((): Array<string> => {
    if(props.state.activeMenuItem===props.item.key) {
      return [styles["navigation-item-submenu-button"], styles["navigation-item-submenu-button-active"]]
    }else{
      return [styles["navigation-item-submenu-button"]]
    }
  },[props.state.activeMenuItem])

  return (
    <div
      onClick={props.onClick}
      className={classes.join(" ")}
    >{props.item.label}</div>
  )

}

function MenuItemContent(props: { strings: Array<string>, onClick: () => Promise<void>, icon: JSX.Element | null, item: NavigationItem }) {
  return <div className={props.strings.join(" ")} onClick={props.onClick}>
    {props.icon}
    <span className={styles["navigation-item-content-label"]}>
            {props.item.label}
          </span>
    <span className={styles["navigation-item-content-icon"]}>
             <i className="ri-arrow-down-s-line"/>
          </span>
  </div>;
}