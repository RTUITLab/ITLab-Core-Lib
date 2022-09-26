import React, {forwardRef} from 'react'
import styles from './text-area.module.scss'
import {TextAreaProps} from "./TextAreaProps";
import {getAllEvents} from "../../utils/getAllEvents";
import {useTextArea} from './useTextArea'

export const TextArea = forwardRef((props: TextAreaProps, ref: any) => {
  const {classes, length, handleChange} = useTextArea(props)

  return (
    <div className={styles['text-area-wrapper']}>
      {props.label && <label htmlFor={props.id} className={styles['text-area-label']}>{props.label}
          {props.isRequired && <span>*</span>}
        </label>
      }
      <textarea
        ref={ref}
        required={props.isRequired}
        className={classes}
        autoFocus={props.autoFocus}
        defaultValue={props.defaultValue || ""}
        placeholder={props.placeholder || ""}
        name={props.name || ""}
        readOnly={props.readonly}
        style={props.style}
        disabled={props.disabled || false}
        onKeyDown={props.onKeyDown}
        {...getAllEvents(props)}
        onChange={(e) => handleChange(e)}
        id={props.id || ""}>
      </textarea>
      {
        props.resize !== 'none' && <span className={styles['resizer']} />
      }
      {
        props.maxLength &&
        <label className={styles['text-area-count']}>{length} / {props.maxLength}</label>
      }
    </div>
  )
})
