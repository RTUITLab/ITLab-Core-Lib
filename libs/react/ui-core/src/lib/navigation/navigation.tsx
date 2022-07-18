import styles from './navigation.module.scss';

/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  return (
    <div className={styles['navigation']}>
      <div className={styles['navigation-item'] +" "+styles["navigation-item-open"]}>
        <span className={styles['navigation-item-icon']}>
          <i className="ri-home-line" />
        </span>
        <span className={styles['navigation-item-label']}>
          fd
        </span>
        <span className={styles['navigation-item-icon']}>
          <i className="ri-arrow-down-s-line" />
        </span>
      </div>
      <div className={styles['navigation-item']+" "+styles['navigation-item-disabled']}>
        <span className={styles['navigation-item-icon']}>
          <i className="ri-home-line" />
        </span>
        <span className={styles['navigation-item-label']}>
          fdfsdfdsffffffffffffggggggggggggggggggggggggggggggggggggggggfffffffffffffffffffffffff
        </span>
        <span className={styles['navigation-item-icon']}>
          <i className="ri-arrow-down-s-line" />
        </span>
      </div>
      <div className={styles['navigation-item']}>
        <span className={styles['navigation-item-icon']}>
          <i className="ri-home-line" />
        </span>
        <span className={styles['navigation-item-label']}>
          fdfsdfdsf
        </span>
        <span className={styles['navigation-item-icon']}>
          <i className="ri-arrow-down-s-line" />
        </span>
      </div>
    </div>
  );
}

export default Navigation;
