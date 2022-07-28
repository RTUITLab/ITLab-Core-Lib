import {useMemo} from 'react'
import {InputProps} from './InputProps'
import {getAllEvents} from '../../utils/getAllEvents'
import styles from './input.module.scss'

export function useInput(props: InputProps) {
  const events=useMemo(() => {
    return getAllEvents(props)
  },[props]);

  const classes = useMemo(() => {
    const classList = [];

    const conditions:{[index: string]:boolean} = {
      "input-wrapper": true,
      "input-icon-left": props.iconPosition === 'left',
      "input-icon-right": props.iconPosition === 'right',
      "input-wrapper-large": props.size === 'large',
      "input-wrapper-small": props.size === 'small',
      "input-wrapper-medium": props.size === 'medium',
      "input-wrapper-disabled": props.disabled === true,
    };

    Object.keys(conditions).forEach((key:string) => {
      if (conditions[key]) {
        classList.push(styles[key]);
      }
    });

    if(!props.size) classList.push(styles['input-wrapper-medium']);

    if(typeof props.className === 'string') classList.push(props.className);
    if(typeof props.className === 'object') classList.push(...props.className);

    return classList.join(' ');

  }, [props]);

  const iconClasses = useMemo(() => {
    const classList = [];

    if(props.iconPosition === 'left') classList.push(styles['input-icon-left']);
    if(props.iconPosition === 'right') classList.push(styles['input-icon-right']);

    return classList.join(' ');
  }, [props]);

  return {classes, iconClasses, events}
}

