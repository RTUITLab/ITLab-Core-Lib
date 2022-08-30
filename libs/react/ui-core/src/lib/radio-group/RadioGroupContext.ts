import React from 'react'

export const RadioGroupContext = React.createContext<ContextType>({
  value: '',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {console.log(e)},
  name: '',
  isRequired: false,
  readonly: false,
  disabled: false,
})

type ContextType = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  isRequired: boolean
  readonly: boolean
  disabled: boolean
}
