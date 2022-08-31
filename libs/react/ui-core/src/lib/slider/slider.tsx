import styles from './slider.module.scss';
import {forwardRef} from 'react'
import {SliderProps} from './SliderProps'

export const Slider = forwardRef(({min = 1, max = 20, showInput = false, defaultValue = 1, range = false, ...props}: SliderProps, ref: any) => {
  return (
    <div ref={ref} style={props.style}>

    </div>
  );
})
