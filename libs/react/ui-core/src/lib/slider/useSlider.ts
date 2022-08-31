import React, {useEffect, useState, useCallback} from 'react'
import {SliderProps} from './SliderProps'

const linearInterpolator = {
  getPercentageForValue: (val: number, min: number, max: number) => {
    return Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100))
  },
  getValueForClientX: (clientX: number, trackDims: any, min: number, max: number) => {
    const { left, width } = trackDims
    const percentageValue = (clientX - left) / width
    const value = (max - min) * percentageValue
    return value + min
  },
}

const getBoundingClientRect = (element: any) => {
  const rect = element.getBoundingClientRect()
  return {
    left: Math.ceil(rect.left),
    width: Math.ceil(rect.width),
  }
}

const sortNumList = (arr: number[]) => [...arr].sort((a, b) => Number(a) - Number(b))

const useGetLatest = (val: any) => {
  const ref = React.useRef(val)
  ref.current = val
  return React.useCallback(() => ref.current, [])
}

export const useSlider = ({min = 1, max = 20, showInput = false, range = false, onChange, defaultValue, step = 1, ...props}: SliderProps,
                          interpolator = linearInterpolator) => {

  const [activeHandleIndex, setActiveHandleIndex] = React.useState<number | null>(null)
  const [tempValues, setTempValues] = React.useState<number[] | null>()

  const getLatest = useGetLatest({
    activeHandleIndex,
    onChange,
    // onDrag,
    defaultValue: defaultValue,
    tempValues,
  })

  const trackElRef = React.useRef()

  const getValueForClientX = useCallback(
    (clientX: number) => {
      const trackDims = getBoundingClientRect(trackElRef.current)
      return interpolator.getValueForClientX(clientX, trackDims, min, max)
    },
    [interpolator, max, min]
  )

  const getNextStep = useCallback(
    (val: number, direction: number) => {
      const nextVal = val + step * direction
      if (nextVal >= min && nextVal <= max) {
        return nextVal
      } else {
        return val
      }

    },
    [max, min, step]
  )

  const roundToStep = React.useCallback(
    (val: number) => {
      let left = min
      let right = max
      while (left < val && left + step < val) {
        left += step
      }
      right = Math.min(left + step, max)
      if (val - left < right - val) {
        return left
      }
      return right
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
        ...defaultValue.slice(0, activeHandleIndex),
        newRoundedValue,
        ...defaultValue.slice(activeHandleIndex + 1),
      ]
      setTempValues(newValues)
    },
    [getLatest, getValueForClientX, roundToStep, defaultValue]
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
        const sortedValues = sortNumList(newValues)
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
        const sortedValues = sortNumList(tempValues || values)
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
    (val: number) => interpolator.getPercentageForValue(val, min, max),
    [interpolator, max, min]
  )

  const segments = React.useMemo(() => {
    const sortedValues = sortNumList(tempValues || defaultValue)

    return [...sortedValues, max].map((value, i) => ({
      value,
      getSegmentProps: ({ key = i, style = {}, ...rest } = {}) => {
        const left = getPercentageForValue(
          sortedValues[i - 1] ? sortedValues[i - 1] : min
        )
        const width = getPercentageForValue(value) - left
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
  }, [getPercentageForValue, max, min, tempValues, defaultValue])

  const handles = React.useMemo(
    () =>
      (tempValues || defaultValue).map((value: number, index: number) => ({
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
      defaultValue,
    ]
  )

  const getTrackProps = ({ref}: TrackProps = {}) => {
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
    if(defaultValue.length === 1) {
      return {
        left: 0,
        width: getPercentageForValue(segments[0].value) + '%'
      }
    }
    else {
      return {
        left: getPercentageForValue(segments[0].value) + '%',
        width: getPercentageForValue(segments[1].value) - getPercentageForValue(segments[0].value) + '%'
      }
    }
  }, [defaultValue, segments, getPercentageForValue])

  return {
    activeHandleIndex,
    segments,
    handles,
    getTrackProps,
    getSegmentStyle,
  }
}

interface TrackProps {
  ref?: any
}
