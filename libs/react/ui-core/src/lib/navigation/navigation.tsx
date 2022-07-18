import styles from './navigation.module.scss';
import React, {forwardRef} from "react";
import {NavigationProps} from "./NavigationProps";
import {useNavigation} from "./useNavigation";


export const Navigation = forwardRef<HTMLDivElement, NavigationProps>(
  (props, ref) => {

    const state = useNavigation(props);

    return (
      <div className={styles['navigation']} ref={ref}>
        <div className={styles['navigation-item'] + " " + styles["navigation-item-open"]}>
        <span className={styles['navigation-item-icon']}>
          <i className="ri-home-line"/>
        </span>
          <span className={styles['navigation-item-label']}>
          fd
        </span>
          <span className={styles['navigation-item-icon']}>
          <i className="ri-arrow-down-s-line"/>
        </span>
        </div>
        <div className={styles['navigation-item'] + " " + styles['navigation-item-disabled']}>
        <span className={styles['navigation-item-icon']}>
          <i className="ri-home-line"/>
        </span>
          <span className={styles['navigation-item-label']}>
          fdfsdfdsffffffffffffggggggggggggggggggggggggggggggggggggggggfffffffffffffffffffffffff
        </span>
          <span className={styles['navigation-item-icon']}>
          <i className="ri-arrow-down-s-line"/>
        </span>
        </div>
        <div className={styles['navigation-item']}>
        <span className={styles['navigation-item-icon']}>
          <i className="ri-home-line"/>
        </span>
          <span className={styles['navigation-item-label']}>
          fdfsdfdsf
        </span>
          <span className={styles['navigation-item-icon']}>
          <i className="ri-arrow-down-s-line"/>
        </span>
        </div>
      </div>
    );
  })

