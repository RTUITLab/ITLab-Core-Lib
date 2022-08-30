import {useMemo} from "react";
import styles from './functional-button.module.scss'
import {FunctionalButtonProps} from './FunctionalButtonProps'
import {getClasses} from '../../utils/getClasses'

export function useFunctionalButton(props:FunctionalButtonProps) {
  const classes = useMemo(() => {
    return getClasses({'functionalButton': true}, styles, props.className)
  }, [props]);

  const iconClasses = useMemo(() => {
    const conditions:{[index: string]:boolean} = {
      "functionalButton-icon": true,
      "functionalButton-icon-left": !props.iconPosition || props.iconPosition === 'left',
      "functionalButton-icon-right": props.iconPosition === 'right'
    };
    return getClasses(conditions, styles)
  }, [props]);

  return {classes, iconClasses}
}
