import React, {forwardRef, useMemo} from 'react'
import {FunctionalButtonProps} from './FunctionalButtonProps'
import {getAllEvents} from '../../utils/getAllEvents'
import {useFunctionalButton} from './useFunctionalButton'

/**
 * FunctionalButton component
 */

export const FunctionalButton=forwardRef((props: FunctionalButtonProps, ref: any) => {
  const {iconClasses, classes} = useFunctionalButton(props)

  const events=useMemo(() => {
    return getAllEvents(props)
  },[props]);

  const icon = <>{props.icon
    ? <span className={iconClasses}>{props.icon}</span>
    : <span className={iconClasses}><i className={'ri-add-circle-line'} /></span>
  }</>

  return (
    <button style={props.style} {...events} ref={ref} className={classes} disabled={props.disabled}>
      {props.children}
      {props.displayIco && icon}
    </button>
  );
})
