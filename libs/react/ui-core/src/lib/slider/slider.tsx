import styles from './slider.module.scss';
import React, {forwardRef} from 'react'
import {SliderProps} from './SliderProps'
import {useSlider} from './useSlider'
import {Tooltip} from '../tooltip/tooltip'
import {InputNumber} from '../input-number/input-number'

export const Slider = forwardRef((props: SliderProps, ref: any) => {
  const { getTrackProps, handles, getSegmentStyle, value, handleChange, classes, localRef, dotClasses, trackClasses} = useSlider(props);

  return (
    <div ref={ref} style={props.style} className={classes}>
      <div className={styles['slider']}
        {...getTrackProps({
          ref: localRef
        })}
      >
        <div className={trackClasses} style={getSegmentStyle()} />
        {handles.map(({ getHandleProps, value }: any) => (
            <button className={dotClasses}
              {...getHandleProps({
                style: props.dotStyle, ref: getTrackProps().ref
              })}
            >
              <Tooltip position={'top'} tooltipContent={value} textStyle={{width: 9, height: 9}}> </Tooltip>
            </button>
        ))}
      </div>
      {
        props.showInput &&
        <InputNumber className={styles['slider-input']} min={props.min} id={props.id || 'slider-id'} max={props.max} step={props.step} style={{width: String(props.max).length + 1 + 'ch'}} displayButtons={false} onChange={handleChange} defaultValue={value[0]} />
      }
    </div>
    );
})

Slider.defaultProps = {min: -10, max: 20, step: 1, defaultValue: [1], showInput: false}
