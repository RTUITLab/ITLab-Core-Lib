import styles from './slider.module.scss';
import React, {createRef, forwardRef} from 'react'
import {SliderProps} from './SliderProps'
import {useSlider} from './useSlider'

export const Slider = forwardRef(({min = 1, max = 20, step = 1, showInput = false, ...props}: SliderProps, ref: any) => {

  const { getTrackProps, handles } = useSlider(props);
  const localRef = createRef()
  return (
    <div>
      <div className={styles['slider']}
        {...getTrackProps({
          ref: localRef
        })}
      >
        {handles.map(({ getHandleProps }: any) => (
          <button className={styles['slider-button']}
            {...getHandleProps({
              style : {}, ref: getTrackProps().ref
            })}
          />
        ))}
      </div>
    </div>
    );
})
