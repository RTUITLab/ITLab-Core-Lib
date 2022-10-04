import {useMemo} from "react";
import {ButtonProps} from "./ButtonProps";
import styles from './button.module.scss'
import {getClasses} from '../../utils/getClasses'

/**
 * Hook for button
 */
export function useButton(props:ButtonProps) {
  const classes = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
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
    };
    return getClasses(conditions, styles, props.className)
  }, [props]);

  const iconClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "button-icon": true,
      "button-icon-left": !props.iconPosition || props.iconPosition === 'left',
      "button-icon-right": props.iconPosition === 'right',
      "spin-anim": Boolean(props.loading),
    };
    return getClasses(conditions, styles)
  }, [props]);

  return {classes, iconClasses}
}
