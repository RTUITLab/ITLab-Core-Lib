import {useMemo} from "react";
import styles from './functional-button.module.scss'
import {FunctionalButtonProps} from './FunctionalButtonProps'


/**
 * Hook for button
 */
export function useFunctionalButton(props:FunctionalButtonProps) {
  const classes = useMemo(() => {
    const classList = [styles['functionalButton']];

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');
  }, [props]);

  const iconClasses = useMemo(() => {
    const classList = [styles['functionalButton-icon']];
    if(!props.iconPosition || props.iconPosition === 'left') classList.push(styles['functionalButton-icon-left']);
    if(props.iconPosition === 'right') classList.push(styles['functionalButton-icon-right']);

    return classList.join(' ');
  }, [props]);

  return {classes, iconClasses}
}
