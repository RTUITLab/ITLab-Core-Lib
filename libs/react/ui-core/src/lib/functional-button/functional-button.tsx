import React, {FC, forwardRef, useMemo} from 'react'
import {FunctionalButtonProps} from './FunctionalButtonProps'
import {getAllEvents} from '../../utils/getAllEvents'
import {useFunctionalButton} from './useFunctionalButton'
import Icon from '../icon/icon'

/**
 * FunctionalButton component
 */

export const FunctionalButton=forwardRef((props: FunctionalButtonProps, ref: any) => {
  const {iconClasses, classes} = useFunctionalButton(props)

  const events=useMemo(() => {
    return getAllEvents(props)
  },[props]);

  const LocalIcon:FC<{icon: React.ReactNode | string}> = React.memo(({icon}) => {
    return (
      <>{icon
        ? <span className={iconClasses}>{icon}</span>
        : <span className={iconClasses}><Icon name={'ri-add-circle-line'} /></span>
      }</>
    )
  })

  return (
    <button style={props.style} {...events} ref={ref} className={classes} disabled={props.disabled}>
      {props.children}
      {props.displayIco && <LocalIcon icon={props.icon} />}
    </button>
  );
})
