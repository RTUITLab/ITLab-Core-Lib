import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Button (test)!</h1>
    </div>
  );
}

export default Button;
