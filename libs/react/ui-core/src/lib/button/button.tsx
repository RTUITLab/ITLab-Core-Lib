import '../../../../../../styles/components/button/index.scss';
import React, {useMemo} from "react";
import {useButton} from "./useButton";
import {ButtonProps} from "./ButtonProps";

/**
 * Button component
 * TODO: добавить компонент Icon, который будем пихать в проп icon, разобраться с пропом iconPosition
 * добавить loading
 * добавить loadingIconStyle
 * добавить forwardRef
 */

export function Button(props: ButtonProps) {
  const {classes} = useButton(props);

  return (<button style={props.style} className={classes} disabled={props.disabled!==undefined && props.disabled}>
    {props.icon}
    {props.children || "Button"}
  </button>);
}

export default Button;
