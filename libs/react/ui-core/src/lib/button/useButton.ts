import {useMemo} from "react";
import {ButtonProps} from "./ButtonProps";
import styles from './button.module.scss'


/**
 * Hook for button
 */
export function useButton(props:ButtonProps) {
  const classes = useMemo(() => {
    const classList = [styles['button']];

    const conditions:{[index: string]:boolean} = {
      "button-icon-only": !props.children,
      "button-solid": props.type === 'solid',
      "button-outline": props.type === 'outline',
      "button-light": props.type === 'light',
      "button-primary": props.color === 'primary',
      "button-green": props.color === 'green',
      "button-red": props.color === 'red',
      "button-transparent": props.color === 'transparent',
      "button-small": props.size === 'small',
      "button-medium": props.size === 'medium',
      "button-large": props.size === 'large',
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(!props.type) classList.push(styles['button-solid']);
    if(!props.size) classList.push(styles['button-medium']);
    if(!props.color) classList.push(styles['button-primary']);

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props]);

  const iconClasses = useMemo(() => {
    const classList = [styles['button-icon']];

    if(!props.iconPosition || props.iconPosition === 'left') classList.push(styles['button-icon-left']);
    if(props.iconPosition === 'right') classList.push(styles['button-icon-right']);
    if(props.loading) classList.push(styles['spin-anim']);

    return classList.join(' ');
  }, [props]);

  return {classes, iconClasses}
}
