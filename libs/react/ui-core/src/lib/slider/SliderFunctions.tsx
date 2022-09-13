import React from 'react'

export class SliderFunctions {
  static linearInterpolator = {
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

  static getBoundingClientRect = (element: any) => {
    const rect = element.getBoundingClientRect()
    return {
      left: Math.ceil(rect.left),
      width: Math.ceil(rect.width),
    }
  }

  static getLatest = (val: any) => {
    const ref = React.useRef(val)
    ref.current = val
    return React.useCallback(() => ref.current, [])
  }

  static sortNumList = (arr: number[]) => [...arr].sort((a, b) => Number(a) - Number(b))
}
