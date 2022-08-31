import styles from './slider.module.scss';
import React, {createRef, forwardRef} from 'react'
import {SliderProps} from './SliderProps'
import {useSlider} from './useSlider'
import {Tooltip} from '../tooltip/tooltip'
import {InputNumber} from '../input-number/input-number'

export const Slider = forwardRef(({min = -10, max = 20, step = 1, id = String(Math.random()), showInput = false, ...props}: SliderProps, ref: any) => {

  const { getTrackProps, handles, getSegmentStyle, value, handleChange} = useSlider({min, max, step, ...props});
  const localRef = createRef()

  return (
    <div ref={ref} style={props.style} className={styles['slider-wrapper']}>
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
      {
        (props.defaultValue.length === 1 && showInput) &&
        <InputNumber className={styles['slider-input']} min={min} id={id} max={max} step={step} style={{width: String(max).length + 1 + 'ch'}} displayButtons={false} onChange={handleChange} defaultValue={value[0]} />
      }
    </div>
    );
})
