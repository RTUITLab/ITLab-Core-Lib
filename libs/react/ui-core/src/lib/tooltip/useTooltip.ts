import React, {useCallback, useEffect, useRef, useState} from "react";
import styles from "./tooltip.module.scss";
import {TooltipProps} from "./TooltipProps";

export function useTooltip(props: TooltipProps) {
  const tooltipContent = useRef<any>()
  const elem = useRef<any>()
  const [classes, setClasses] = useState<string>(styles['tooltip-content'])
  const [tooltipStyles, setTooltipStyles] = useState<React.CSSProperties>({})


  function getCoords(tooltipContent: HTMLElement) {
    let box = {top: 0, left: 0, right: 0, bottom: 0}

    try {
      box = tooltipContent.getBoundingClientRect()
    } catch (e) {
      console.log(e)
    }

    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset,
    }
  }

  const recalculatePosition = useCallback(() => {
    if (!tooltipContent.current) return;

    const parentCoords = getCoords(elem.current)
    const classes = new Set([styles['tooltip-content']])
    const coords = getCoords(tooltipContent.current)

    const parentWidth = elem.current.offsetWidth
    const tooltipWidth = tooltipContent.current.offsetWidth
    const centerHorizontal = (parentWidth - tooltipWidth) / 2

    const parentHeight = elem.current.offsetHeight
    const tooltipHeight = tooltipContent.current.offsetHeight
    const centerVertical = (parentHeight - tooltipHeight) / 2

    const conditions: { [index: string]: boolean } = {
      "bottom": parentCoords.bottom + tooltipHeight < window.innerHeight - 15 && centerHorizontal - tooltipWidth / 2 > 15 && centerHorizontal + tooltipWidth / 2 < window.innerWidth - 15,
      "top": parentCoords.top - tooltipHeight > 15 && window.innerWidth + centerHorizontal - tooltipWidth / 2 > 15 && centerHorizontal + tooltipWidth / 2 < window.innerWidth - 15,
      "left": parentCoords.left - tooltipWidth > 15 && window.innerHeight - centerVertical - tooltipHeight / 2 > 15 && centerVertical + tooltipHeight / 2 < window.innerHeight - 15,
      "right": parentCoords.right + tooltipWidth < window.innerWidth - 15 && centerVertical - tooltipHeight / 2 > 15 && centerVertical + tooltipHeight / 2 < window.innerHeight - 15,
      "bottom-left": parentCoords.bottom + tooltipHeight < window.innerHeight - 15 && window.innerWidth - parentCoords.right - tooltipWidth > 15,
      "bottom-right": parentCoords.bottom + tooltipHeight < window.innerHeight - 15 && parentCoords.right + tooltipWidth < window.innerWidth - 15,
      "top-left": parentCoords.top - tooltipHeight > 15 && parentCoords.left - tooltipWidth > 15,
      "top-right": parentCoords.top - tooltipHeight > 15 && parentCoords.right + tooltipWidth < window.innerWidth - 15,
      "left-top": parentCoords.left - tooltipWidth > 15 && parentCoords.top - tooltipHeight > 15,
      "left-bottom": parentCoords.left - tooltipWidth > 15 && parentCoords.bottom + tooltipHeight < window.innerHeight - 15,
      "right-top": parentCoords.right + tooltipWidth < window.innerWidth - 15 && parentCoords.top - tooltipHeight > 15,
      "right-bottom": parentCoords.right + tooltipWidth < window.innerWidth - 15 && parentCoords.bottom + tooltipHeight < window.innerHeight - 15,
    }

    function setStyles(condition: any) {
      if (condition.top) {
        classes.add(styles['tooltip-content-top'])
        setTooltipStyles({left: centerHorizontal, top: -tooltipHeight - 10})
      } else if (condition.bottom) {
        classes.add(styles['tooltip-content-bottom'])
        setTooltipStyles({left: centerHorizontal, bottom: -tooltipHeight - 10})
      } else if (condition.right) {
        classes.add(styles['tooltip-content-right'])
        setTooltipStyles({top: centerVertical, right: -tooltipWidth - 10})
      } else if (condition.left) {
        classes.add(styles['tooltip-content-left'])
        setTooltipStyles({top: centerVertical, left: -tooltipWidth - 10})
      } else if (condition['bottom-left']) {
        classes.add(styles['tooltip-content-bottom-left'])
        setTooltipStyles({right: 0, bottom: -tooltipHeight - 10})
      } else if (condition['bottom-right']) {
        classes.add(styles['tooltip-content-bottom-right'])
        setTooltipStyles({left: 0, bottom: -tooltipHeight - 10})
      } else if (condition['top-left']) {
        classes.add(styles['tooltip-content-top-left'])
        setTooltipStyles({right: 0, top: -tooltipHeight - 10})
      } else if (condition['top-right']) {
        classes.add(styles['tooltip-content-top-right'])
        setTooltipStyles({left: 0, top: -tooltipHeight - 10})
      } else if (condition['left-top']) {
        classes.add(styles['tooltip-content-left-top'])
        setTooltipStyles({bottom: -6, left: -tooltipWidth - 10})
      } else if (condition['left-bottom']) {
        classes.add(styles['tooltip-content-left-bottom'])
        setTooltipStyles({top: -6, left: -tooltipWidth - 10})
      } else if (condition['right-top']) {
        classes.add(styles['tooltip-content-right-top'])
        setTooltipStyles({bottom: -6, right: -tooltipWidth - 10})
      } else if (condition['right-bottom']) {
        classes.add(styles['tooltip-content-right-bottom'])
        setTooltipStyles({top: -6, right: -tooltipWidth - 10})
      }
    }

    if (props.position) {
      setStyles({
        "bottom": props.position === "bottom",
        "top": props.position === "top",
        "right": props.position === "right",
        "left": props.position === "left",
        "bottom-left": props.position === "bottom-left",
        "bottom-right": props.position === "bottom-right",
        "top-left": props.position === "top-left",
        "top-right": props.position === "top-right",
        "left-top": props.position === "left-top",
        "left-bottom": props.position === "left-bottom",
        "right-top": props.position === "right-top",
        "right-bottom": props.position === "right-bottom",
      })
    } else {
      setStyles(conditions)
    }

    setClasses(Array.from(classes).join(' '))
  }, []);

  useEffect(() => {
    recalculatePosition()
  }, [])

  useEffect(() => {
    recalculatePosition()
  }, [props.position])
  return {tooltipContent, elem, classes, tooltipStyles, recalculatePosition};
}
