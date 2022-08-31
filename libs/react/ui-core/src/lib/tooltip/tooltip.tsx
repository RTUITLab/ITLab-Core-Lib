import React, {forwardRef} from 'react';
import styles from './tooltip.module.scss';
import {useTooltip} from "./useTooltip";
import {Button} from "../button/button";
import {TooltipProps} from "./TooltipProps";
import {TextArea} from '../text-area/text-area'

export const Tooltip = forwardRef((props: TooltipProps, ref: any) => {
  const {tooltipContent, elem, classes, tooltipStyles, recalculatePosition} = useTooltip(props);

  const interactiveContent = (
    <div className={styles['interactive-content']}>
      <TextArea style={{width:"220px", height:"115px"}} size={"small"}/>
      <div className={styles['buttons-block']}>
        <Button size={"small"} onClick={props.onConfirm} type={"outline"} color={"red"}>{props.confirmButtonText || "Отмена"}</Button>
        <Button size={"small"} onClick={props.onCancel} type={"outline"} color={"green"}>{props.cancelButtonText || "Сохранить"}</Button>
      </div>
    </div>
  )

  const metaContent = (
    <div className={styles['meta-content']}>
      <p>{props.metaTitle}</p>
      <p>{props.metaDescription}</p>
    </div>
  )
  return (
   <div ref={ref}>
     <div
       className={styles['tooltip']}
       onMouseEnter={recalculatePosition}
       onTouchStart={recalculatePosition}
       ref={elem}
     >
       <div style={props.textStyle}>
        {props.children}
       </div>
       {!props.hidden && (
         <div
           ref={(e)=>{
             tooltipContent.current = e;
           }}
           className={classes}
           style={{...props.style, ...tooltipStyles}}>
           {props.type === "interactive" && interactiveContent}
           {props.type === "meta" && metaContent}
           {(!props.type || props.type === "default") && props.tooltipContent}
         </div>
       )}
     </div>
   </div>
  )
})



