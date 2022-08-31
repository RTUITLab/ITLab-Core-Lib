import styles from './slider.module.scss';
import React, {createRef, forwardRef, useState} from 'react'
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
          <button
            {...getHandleProps({
              style : {
                position: 'absolute',
                width: "14px",
                height: "14px",
                cursor: "pointer",
                outline: "none",
                borderRadius: "100%",
                background: "linear-gradient(to bottom, #eee 45%, #ddd 55%)",
                border: "solid 1px #888"
              }, ref: getTrackProps().ref
            })}
          />
        ))}
      </div>
    </div>
    );
})
