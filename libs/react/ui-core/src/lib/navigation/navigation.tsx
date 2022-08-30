import styles from './navigation.module.scss';
import React, {FC, forwardRef, useMemo} from 'react'
import {NavigationProps} from "./NavigationProps";
import {useNavigation,} from "./useNavigation";
import {useMenuItem} from "./useMenuItem";
import Icon from '../icon/icon'
import {MenuItemContentProps} from './MenuItemContentProps'
import {SubmenuButtonProps} from './SubmenuButtonProps'
import {MenuItemProps} from './MenuItemProps'


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

const MenuItem:FC<MenuItemProps> = React.memo((localProps) => {
  const {
    contentItemClasses,
    item,
    props,
    state,
    submenu,
    submenuHeight,
    submenuDisplay,
    onMenuClick,
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
      <MenuItemContent showIcons={state.showIcons} icon={item.icon} strings={contentItemClasses} onClick={onMenuClick} item={item}/>
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
})

const SubmenuButton:FC<SubmenuButtonProps> = React.memo((props) => {
  const classes = useMemo((): Array<string> => {
    if(props.state.activeMenuItem===props.item.key) {
      return [styles["navigation-item-submenu-button"], styles["navigation-item-submenu-button-active"]]
    }else{
      return [styles["navigation-item-submenu-button"]]
    }
  },[props.state.activeMenuItem])

  return (
    <div onClick={props.onClick} className={classes.join(" ")}>
      {props.item.label}
    </div>
  )
})

const MenuItemContent:FC<MenuItemContentProps> = React.memo((props) => {
  const LocalIcon:FC<{showIcons: boolean, icon: React.ReactNode | string}> = React.memo(({icon, showIcons}) => {
    return (
      showIcons ?
        <span className={styles['navigation-item-content-icon']}>
          {typeof icon === "string" ? <Icon name={icon} /> : icon}
        </span>
      : null
    )
  })
  return (
    <div className={props.strings.join(" ")} onClick={props.onClick}>
      <LocalIcon icon={props.icon} showIcons />
      <span className={styles["navigation-item-content-label"]}>
        {props.item.label}
      </span>
      <span className={styles["navigation-item-content-icon"]}>
        <i className="ri-arrow-down-s-line"/>
      </span>
    </div>
  );
})
