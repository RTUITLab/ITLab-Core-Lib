import styles from './dropdown.module.scss'
import React, {forwardRef} from 'react'
import {useDropdown} from './useDropdown'
import {DropdownItemProps, DropdownProps} from './DropdownProps'
import {useDropdownProps} from './useDropdownProps'

/**
 * Dropdown component
 */

export const Dropdown=forwardRef((props: DropdownProps, ref: any) => {
  const state = useDropdown(props);
  const arrow = <span className={`${styles['dropdown-icon']} ${state.isOpen ? styles['dropdown-icon-active'] : ''}`}>
    <i className={"ri-arrow-down-s-line"} style={{fontSize: 24}} />
  </span>

  return (
    <div ref={ref}>
      <div ref={state.list} className={state.containerClasses} style={props.style} tabIndex={0}>
        <div className={state.classes} onClick={() => state.handleOpen(!state.isOpen)} >
          {state.icon}
          <span className={`${styles['dropdown-label']} ${!state.activeLabel ? styles['dropdown-label-placeholder'] : ''}`}>
            {state.activeLabel || 'Список вариантов'}
          </span>
          {arrow}
        </div>

        <div className={`${styles['dropdown-menu']} ${state.isOpen ? styles['dropdown-menu-active'] : ''}`}>
          {
            props.items?.map((item) => {
              return <DropdownItem key={item.key} state={state} item={item} />
            })
          }
        </div>
      </div>
    </div>
  );
});

const DropdownItem = React.memo((localProps: {state: useDropdownProps, item: DropdownItemProps}) => {
  const {state, item} = localProps;
  return (
    <div className={`${state.itemClasses} ${item.disabled ? styles['dropdown-disabled'] : ''}`} tabIndex={!item.disabled ? 0 : 1}
         onKeyUp={(e) => state.handleKeyUp(item.label, item.key, e)}
         onClick={(e) => state.handleSelect(item.label, item.key, e)}
    >
      {item.label}
    </div>
  )
})
