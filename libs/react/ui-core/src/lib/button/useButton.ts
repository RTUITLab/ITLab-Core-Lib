import {useMemo} from "react";
import {ButtonProps} from "./ButtonProps";
import styles from './button.module.scss'
import {getClasses} from '../../utils/getClasses'

/**
 * Hook for button
 */
export function useButton(props:ButtonProps) {
  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean | string} = {
      "button": true,
      "button-icon-only": !props.children,
      "button-solid": props.type === 'solid' || !props.type,
      "button-outline": props.type === 'outline',
      "button-light": props.type === 'light',
      "button-primary": props.color === 'primary' || !props.color,
      "button-green": props.color === 'green',
      "button-red": props.color === 'red',
      "button-transparent": props.color === 'transparent',
      "button-small": props.size === 'small',
      "button-medium": props.size === 'medium' || !props.size,
      "button-large": props.size === 'large',
      "className": typeof props.className === 'string' ? props.className : props.className?.join(' ') || false
    };
    const classList = getClasses(conditions, styles) as string[]

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
