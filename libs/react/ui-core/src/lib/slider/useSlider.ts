import React, {useCallback, useState} from 'react'
import {SliderProps} from './SliderProps'
import {SliderFunctions} from './SliderFunctions'

export const useSlider = ({onChange, defaultValue, onDrag, step = 1, ...props}: SliderProps,
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

  const handleDrag = React.useCallback(
    (e: any) => {
      const { activeHandleIndex} = getLatest()
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
    },
    [getLatest, getValueForClientX, roundToStep, value]
  )

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent, index: number) => {
      const { values, onChange } = getLatest()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setActiveHandleIndex(index)
        const direction = e.key === 'ArrowLeft' ? -1 : 1
        const newValue = getNextStep(values[index], direction)
        const newValues = [
          ...values.slice(0, index),
          newValue,
          ...values.slice(index + 1),
        ]
        const sortedValues = SliderFunctions.sortNumList(newValues)
        onChange(sortedValues)
      }
    },
    [getLatest, getNextStep]
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
        onChange(sortedValues)
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

  return {
    activeHandleIndex,
    segments,
    handles,
    getTrackProps,
    getSegmentStyle,
    value,
    handleChange,
  }
}
