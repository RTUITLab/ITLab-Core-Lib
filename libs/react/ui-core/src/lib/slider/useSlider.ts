import React, {createRef, useCallback, useMemo, useState} from 'react'
import styles from './slider.module.scss'
import {SliderProps} from './SliderProps'
import {SliderFunctions} from './SliderFunctions'
import {getClasses} from '../../utils/getClasses'

export const useSlider = ({onChange, defaultValue = [1], onDrag, step = 1, ...props}: SliderProps,
                          interpolator = SliderFunctions.linearInterpolator) => {

  const [activeHandleIndex, setActiveHandleIndex] = React.useState<number | null>(null)
  const [tempValues, setTempValues] = React.useState<[number] | [number, number]| null>()
  const [value, setValue] = useState<[number] | [number, number]>(defaultValue)

  const {min, max} = props

  const getLatest = SliderFunctions.useGetLatest({
    activeHandleIndex,
    onChange,
    onDrag,
    defaultValue: value,
    tempValues,
  })

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, value: number | string) => {
    if(!isNaN(Number(value))) {
      setValue([Number(value)])
    }
  }, [])

  const trackElRef = React.useRef()
  const localRef = React.useRef()

  const getValueForClientX = useCallback(
    (clientX: number) => {
      const trackDims = SliderFunctions.getBoundingClientRect(trackElRef.current)
      return interpolator.getValueForClientX(clientX, trackDims, min as number, max as number)
    },
    [interpolator, max, min]
  )

  const getNextStep = useCallback(
    (val: number, direction: number) => {
      const nextVal = val + step * direction
      if (min && nextVal >= min  && max && nextVal <= max) {
        return nextVal
      } else {
        return val
      }

    },
    [max, min, step]
  )

  const roundToStep = React.useCallback(
    (val: number) => {
      if(max && min) {
        let left = min
        let right = max
        while (left < val && left + step < val) {
          left += step
        }
        right = Math.min(left + step, max as number)
        if (val - left < right - val) {
          return left
        }
        return right
      }
      else return
    },
    [max, min, step]
  )

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const clientX = e.clientX
      const newValue = getValueForClientX(clientX)
      const newRoundedValue = roundToStep(newValue)
      let newValues, activeHandleIndex
      if(value.length === 2 && newRoundedValue) {
        if(Math.abs(value[0] - newRoundedValue) <= Math.abs(value[1] - newRoundedValue)) {
          activeHandleIndex = 0
        }
        else {
          activeHandleIndex = 1
        }
        newValues = [
          ...value.slice(0, activeHandleIndex),
          newRoundedValue,
          ...value.slice(activeHandleIndex + 1),
        ]
      }
      else {
        newValues = [
          ...value.slice(0, 0),
          newRoundedValue,
        ]
      }
      setTempValues(newValues as [number] | [number, number])
      setValue(newValues as [number] | [number, number])
    },
    [getLatest, getValueForClientX, roundToStep, value]
  )

  const handleDrag = React.useCallback(
    (e: any) => {
      const { activeHandleIndex, onDrag} = getLatest()
      const clientX =
        e.type === 'touchmove' ? e.changedTouches[0].clientX : e.clientX
      const newValue = getValueForClientX(clientX)
      const newRoundedValue = roundToStep(newValue)

      const newValues = [
        ...value.slice(0, activeHandleIndex),
        newRoundedValue,
        ...value.slice(activeHandleIndex + 1),
      ]
      setTempValues(newValues as [number] | [number, number])
      setValue(newValues as [number] | [number, number])
      if(onDrag) onDrag(newValues as [number] | [number, number])
    },
    [getLatest, getValueForClientX, roundToStep, value]
  )

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent, index: number) => {

      const { onChange } = getLatest()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setActiveHandleIndex(index)
        const direction = e.key === 'ArrowLeft' ? -1 : 1

        const newValue = getNextStep(value[index], direction)
        const newValues = [
          ...value.slice(0, index),
          newValue,
          ...value.slice(index + 1),
        ]
        setTempValues(newValues as [number] | [number, number])
        setValue(newValues as [number] | [number, number])
        if(onChange) onChange(newValues)
      }
    },
    [getLatest, getNextStep, value]
  )

  const handlePress = React.useCallback(
    (e: React.KeyboardEvent | React.MouseEvent | React.TouchEvent, index: number) => {
      setActiveHandleIndex(index)
      const handleRelease = () => {
        const {
          tempValues,
          values,
          onChange,
        } = getLatest()

        document.removeEventListener('mousemove', handleDrag)
        document.removeEventListener('touchmove', handleDrag)
        document.removeEventListener('mouseup', handleRelease)
        document.removeEventListener('touchend', handleRelease)
        const sortedValues = SliderFunctions.sortNumList(tempValues || values)
        if(onChange) onChange(sortedValues)
        setActiveHandleIndex(null)
        setTempValues(null)
      }

      document.addEventListener('mousemove', handleDrag)
      document.addEventListener('touchmove', handleDrag)
      document.addEventListener('mouseup', handleRelease)
      document.addEventListener('touchend', handleRelease)
    },
    [getLatest, handleDrag]
  )

  const getPercentageForValue = React.useCallback(
    (val: number) => interpolator.getPercentageForValue(val, min as number, max as number),
    [interpolator, max, min]
  )

  const segments = React.useMemo(() => {
    const sortedValues = SliderFunctions.sortNumList(tempValues || value)
    return [...sortedValues, max].map((value, i) => ({
      value,
      getSegmentProps: ({ key = i, style = {}, ...rest } = {}) => {
        const left = getPercentageForValue(
          sortedValues[i - 1] ? sortedValues[i - 1] : min as number
        )
        const width = getPercentageForValue(value as number) - left
        return {
          key,
          style: {
            position: 'absolute',
            left: `${left}%`,
            width: `${width}%`,
            ...style,
          },
          ...rest,
        }
      },
    }))
  }, [getPercentageForValue, max, min, tempValues, value])

  const handles = React.useMemo(
    () =>
      (tempValues || value).map((value: number, index: number) => ({
        value,
        active: index === activeHandleIndex,
        getHandleProps: ({
                           style = {},
                           key = index,
                           ...rest
                         }) => ({
          key,
          onKeyDown: (e: React.KeyboardEvent) => {
            e.persist()
            handleKeyDown(e, index)
            if (rest['onKeyDown']) rest['onKeyDown'](e)
          },
          onMouseDown: (e: React.MouseEvent) => {
            e.persist()
            handlePress(e, index)
            if (rest['onMouseDown']) rest['onMouseDown'](e)
          },
          onTouchStart: (e: React.TouchEvent) => {
            e.persist()
            handlePress(e, index)
            if (rest['onTouchStart']) rest['onTouchStart'](e)
          },
          role: 'slider',
          'aria-valuemin': min,
          'aria-valuemax': max,
          'aria-valuenow': value,
          style: {
            top: '50%',
            left: `${getPercentageForValue(value)}%`,
            zIndex: index === activeHandleIndex ? '1' : '0',
            transform: 'translate(-50%, -50%)',
            ...style,
          },
          ...rest,
        }),
      })),
    [
      activeHandleIndex,
      getPercentageForValue,
      handleKeyDown,
      handlePress,
      min,
      max,
      tempValues,
      value,
    ]
  )

  const getTrackProps = ({ref} :{ref?: any} = {}) => {
    return {
      ref: (el: any) => {
        trackElRef.current = el
        if (ref) {
          if (typeof ref === 'function') {
            ref(el)
          } else {
            ref.current = el
          }
        }
      },
      onClick: (e: React.MouseEvent<HTMLDivElement>) => {
        e.persist()
        handleClick(e)
      },
    }
  }

  const getSegmentStyle = useCallback(() => {
    if(value.length === 1) {
      return {
        left: 0,
        width: getPercentageForValue(segments[0].value as number) + '%'
      }
    }
    else {
      return {
        left: getPercentageForValue(segments[0].value as number) + '%',
        width: getPercentageForValue(segments[1].value as number) - getPercentageForValue(segments[0].value as number) + '%'
      }
    }
  }, [value, segments, getPercentageForValue])

  const classes = useMemo(() => {
    return getClasses({'slider-wrapper': true}, styles, props.className)
  }, [props.className])

  return {
    activeHandleIndex,
    segments,
    handles,
    getTrackProps,
    getSegmentStyle,
    value,
    handleChange,
    classes,
    localRef
  }
}
