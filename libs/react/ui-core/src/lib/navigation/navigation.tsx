import styles from './navigation.module.scss';
import React, {forwardRef, useEffect, useMemo, useState, useTransition} from "react";
import {NavigationItem, NavigationProps} from "./NavigationProps";
import {useNavigation, useNavigationProps} from "./useNavigation";


export const Navigation = forwardRef<HTMLDivElement, NavigationProps>((props, ref) => {

  const state = useNavigation(props);

  return (<div>
    <div className={styles['navigation-horizontal']} ref={ref}>
      {props.items.map((item, index) => {
        return <MenuItem key={index} item={item} props={props} state={state}/>
      })}
    </div>
    <div>fdsfdsfdsfdsfsdf</div>
  </div>);
})

function MenuItem(localProps: { item: NavigationItem, props: NavigationProps, state: useNavigationProps }) {
  const [contentItemClasses, setContentItemClasses] = useState<any>([[styles['navigation-item-content']]]);
  const {item, props, state} = localProps;
  const submenu = React.createRef<HTMLDivElement>();
  const icon = (<>
    {state.showIcons ? <><span className={styles['navigation-item-content-icon']}>
          {typeof item.icon === "string" ? <i className={item.icon}/> : item.icon}
        </span></> : null}
  </>)
  const menuItemManager = {
    push: (className: string) => {
      setContentItemClasses([...contentItemClasses, className]);
    }, remove: (className: string) => {
      setContentItemClasses(contentItemClasses.filter((c: string) => c !== className));
    }
  }

  const [submenuHeight, setSubmenuHeight] = useState(0)
  const [submenuDisplay, setSubmenuDisplay] = useState("block")
  const [defaultSubmenuHeight, setDefaultSubmenuHeight] = useState(0)

  useEffect(() => {
    if (!submenu.current) {
      setDefaultSubmenuHeight(0)
      return;
    }
    const children = Array.from(submenu.current.children);
    setDefaultSubmenuHeight(children.reduce((acc, child) => acc + child.clientHeight, 0))
    setSubmenuDisplay("none")
  }, [props]);

  return <>
    <div className={styles['navigation-item']}>
      <div className={contentItemClasses.join(" ")} onClick={async () => {
        if (contentItemClasses.includes(styles['navigation-item-content-open'])) {
          menuItemManager.remove(styles['navigation-item-content-open']);
          setSubmenuHeight(0)
          setTimeout(() => {
            setSubmenuDisplay("none")
          }, 200)
        } else {
          menuItemManager.push(styles['navigation-item-content-open']);
          setSubmenuDisplay("block")
          setTimeout(() => {
            setSubmenuHeight(defaultSubmenuHeight);
          }, 0)
        }
      }}>
        {icon}
        <span className={styles['navigation-item-content-label']}>
            {item.label}
          </span>
        <span className={styles['navigation-item-content-icon']}>
             <i className="ri-arrow-down-s-line"/>
          </span>
      </div>
      <div style={{height: submenuHeight, display: submenuDisplay}} ref={submenu}
           className={styles['navigation-item-submenu']}>
        {item.list?.map((item, index) => {
          return <>
            <div
              className={styles['navigation-item-submenu-button'] + " " + styles["navigation-item-submenu-button-active"]}
              key={item.key}>{item.label}</div>
            <div
              className={styles['navigation-item-submenu-button']}
              key={item.key}>{item.label}</div>
          </>
        })}
      </div>
    </div>
  </>
}
