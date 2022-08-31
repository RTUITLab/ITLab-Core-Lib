import styles from './slider.module.scss';
import React, {createRef, forwardRef} from 'react'
import {SliderProps} from './SliderProps'
import {useSlider} from './useSlider'
import {Tooltip} from '../tooltip/tooltip'

export const Slider = forwardRef(({min = 1, max = 20, step = 1, showInput = false, ...props}: SliderProps, ref: any) => {

  const { getTrackProps, handles, getSegmentStyle } = useSlider(props);
  const localRef = createRef()

  return (
    <div>
      <div className={styles['slider']}
        {...getTrackProps({
          ref: localRef
        })}
      >
        <div className={styles['slider-segment']} style={getSegmentStyle()} />
        {handles.map(({ getHandleProps, value }: any) => (

            <button className={styles['slider-button']}
              {...getHandleProps({
                style : {}, ref: getTrackProps().ref
              })}
            >
              <Tooltip position={'top'} tooltipContent={value} textStyle={{width: 11, height: 11}}>

              </Tooltip>
            </button>
        ))}
      </div>
    </div>
    );
})
