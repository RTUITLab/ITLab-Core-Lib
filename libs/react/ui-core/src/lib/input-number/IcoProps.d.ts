export type IcoProps = {
  /** Name of the icon */
  name: string

  /** Inline style of the icon*/
  style?: object

  /** Identifier style of the label*/
  id: string

  /** onClick event */
  handleClick: (count: number) => void

  /** Step of increase or decrease value */
  step: number
}
