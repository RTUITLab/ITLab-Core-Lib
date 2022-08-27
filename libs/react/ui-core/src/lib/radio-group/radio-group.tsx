import React, {forwardRef} from 'react'
import {RadioGroupProps} from './RadioGroupProps'
import {RadioGroupContext} from './RadioGroupContext'

/**
 * Radio group component. Insert `<Radio value={'value'} onChange={onChange} />` components inside
 */

export const RadioGroup = forwardRef ((props: RadioGroupProps, ref: any) => {
  return (
    <div ref={ref}>
      <RadioGroupContext.Provider value={{value: props.value || '', onChange: props.onChange, isRequired: props.isRequired || false,
        name: props.name || '', readonly: props.readonly || false, disabled: props.disabled || false}}>
        {props.children}
      </RadioGroupContext.Provider>
    </div>
  );
})
