import styles from './dropdown.module.scss'
import React, {FC, forwardRef, ReactNode} from 'react'
import {useDropdown} from './useDropdown'
import {DropdownItemProps, DropdownProps} from './DropdownProps'
import {useDropdownProps} from './useDropdownProps'
import Icon from '../icon/icon'

/**
 * Dropdown component
 */

export const Dropdown=forwardRef((props: DropdownProps, ref: any) => {
  const state = useDropdown(props);

  const LocalIcon:FC<{icon: React.ReactNode | string}> = React.memo(({icon}) => {
    return (
      (icon ? (
        <span className={styles['dropdown-icon']}>
       {typeof icon === "string" ? <Icon name={icon} size={24} /> : icon}
    </span>
      ) : null)
    )
  })

  return (
    <div ref={ref}>
      <div ref={state.list} className={state.containerClasses} style={props.style} tabIndex={0}>
        <div className={state.classes} onClick={() => state.handleOpen(!state.isOpen)} >
          <LocalIcon icon={props.icon} />
          <span className={`${styles['dropdown-label']} ${!state.activeLabel ? styles['dropdown-label-placeholder'] : ''}`}>
            {state.activeLabel || 'Список вариантов'}
          </span>
          <span className={`${styles['dropdown-icon']} ${state.isOpen ? styles['dropdown-icon-active'] : ''}`}>
            <Icon className={styles['dropdown-icon-active']} name={'ri-arrow-down-s-line'} size={24} />
          </span>
        </div>

        <div className={`${styles['dropdown-menu']} ${state.isOpen ? styles['dropdown-menu-active'] : ''}`}>
          {
            props.items?.map((item) => {
              return <DropdownItem key={item.key} state={state} item={item} props={props}/>
            })
          }
        </div>
      </div>
    </div>
  );
});

const DropdownItem = React.memo((localProps: {state: useDropdownProps, item: DropdownItemProps, props: DropdownProps}) => {
  const {state, item, props} = localProps;
  return (
    <div className={`${state.itemClasses} ${item.disabled ? styles['dropdown-disabled'] : ''}`} tabIndex={!item.disabled ? 0 : 1}
         onKeyUp={(e) => state.handleKeyUp(item.label, item.key, e)} style={props.itemStyle}
         onClick={(e) => state.handleSelect(item.label, item.key, e)}
    >
      {item.label}
    </div>
  )
})
