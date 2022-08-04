import {useMemo} from "react";
import {DropdownProps} from "./DropdownProps";
import styles from './button.module.scss'


/**
 * Hook for dropdown
 */
export function useDropdown(props:DropdownProps) {
  const classes = useMemo(() => {
    const classList = ['button'];

    const conditions:{[index: string]:boolean} = {
      "dropdown": true,
      "button-small": props.size === 'small',
      "button-medium": props.size === 'medium',
      "button-large": props.size === 'large',
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(!props.size) classList.push(styles['button-medium']);

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props]);

  // const iconClasses = useMemo(() => {
  //   const classList = ['button-icon'];
  //
  //   if(props.iconPosition === 'left') classList.push(styles['button-icon-left']);
  //   if(props.iconPosition === 'right') classList.push(styles['button-icon-right']);
  //   if(props.loading) classList.push(styles['spin-anim']);
  //
  //   return classList.join(' ');
  // }, [props]);

  return {classes}
}
