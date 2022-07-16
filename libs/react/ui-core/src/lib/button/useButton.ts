import {useMemo} from "react";
import {ButtonProps} from "./ButtonProps";

/**
 * Hook for button
 */
export function useButton(props:ButtonProps) {
  const classes = useMemo(() => {
    const classList = ['button'];

    const conditions:{[index: string]:boolean} = {
      "button": true,
      "button-icon-left": props.iconPosition === 'left',
      "button-icon-right": props.iconPosition === 'right',
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
        classList.push(key);
      }
    });

    if(!props.iconPosition) classList.push('button-icon-left');
    if(!props.type) classList.push('button-solid');
    if(!props.size) classList.push('button-medium');
    if(!props.color) classList.push('button-primary');

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props]);

  return {classes}
}
