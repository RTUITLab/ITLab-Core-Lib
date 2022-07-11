import styles from './react-ui-core.module.scss';

/* eslint-disable-next-line */
export interface ReactUiCoreProps {}

export function ReactUiCore(props: ReactUiCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactUiCore!</h1>
    </div>
  );
}

export default ReactUiCore;
