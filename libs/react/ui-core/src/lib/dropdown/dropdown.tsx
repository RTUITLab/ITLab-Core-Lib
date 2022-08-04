import styles from './dropdown.module.scss'
import React, {forwardRef} from 'react'
import {useDropdown, useDropdownProps} from './useDropdown'
import {DropdownItemProps, DropdownProps} from './DropdownProps'

/**
 * Dropdown component
 */

export const Dropdown=forwardRef((props: DropdownProps, ref: any) => {
  const state = useDropdown(props);
  const arrow = <span className={`${styles['dropdown-icon']} ${state.isOpen ? styles['dropdown-icon-active'] : ''}`}>
    <i className={"ri-arrow-down-s-line"} style={{fontSize: 24}} />
  </span>
  //Нужно добавить ограничение по ширине блока

  return (
    <div ref={ref} className={styles['dropdown']} style={props.style}>
      <div tabIndex={0} className={state.classes}  onClick={() => state.handleOpen(!state.isOpen)}>
        {state.icon}
        <span style={{minWidth: 146}}>
          {state.activeLabel || 'Список вариантов'}
        </span>
        {arrow}
      </div>
      <div className={`${styles['dropdown-menu']} ${state.isOpen ? styles['dropdown-menu-active'] : ''}`} onBlur={() => console.log('rabotai')}>
        {
          props.items?.map((item, index) => {
            return <DropdownItem key={item.key} state={state} item={item} props={props} />
          })
        }
      </div>
    </div>
  );
});

const DropdownItem = React.memo((localProps: {state: useDropdownProps, item: DropdownItemProps, props: DropdownProps}) => {
  const {state, item, props} = localProps;
  return (
    <div tabIndex={0} className={state.itemClasses}
         onKeyUp={(e) => state.handleKeyUp(item.label, item.key, e)}
         onClick={(e) => state.handleSelect(item.label, item.key, e)}
    >
      {item.label}
    </div>
  )
})
