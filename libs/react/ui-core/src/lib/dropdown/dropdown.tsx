import styles from './dropdown.module.scss'
import React, {forwardRef} from 'react'
import {useDropdown} from './useDropdown'
import {DropdownProps} from './DropdownProps'

/**
 * Checkbox component
 */

export const Dropdown=forwardRef((props: DropdownProps, ref: any) => {
  const {classes} = useDropdown(props);

  const icon = <span className={'dropdown-icon'}>{props.icon}</span>

  return (
    <div ref={ref} style={props.style}>

    </div>
  );
});
