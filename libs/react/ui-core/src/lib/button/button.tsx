import React, {forwardRef, useMemo} from "react";
import {useButton} from "./useButton";
import {ButtonProps} from "./ButtonProps";
import "../../../../../../styles/icons/_index.scss";
import {getAllEvents} from "../../utils/getAllEvents";

/**
 * Button component
 */

export const Button=forwardRef((props: ButtonProps, ref: any) => {
  const {classes, iconClasses} = useButton(props);

  const events=useMemo(() => {
    return getAllEvents(props)
  },[props]);

  const icon = <>{props.icon && <span className={iconClasses}>
      {props.icon}
    </span>}</>

  const loadingIcon = <>{props.loadingIcon ? <span className={iconClasses}>{props.loadingIcon}</span> : <span className={iconClasses + " " + "ri-loader-2-line"} style={{fontSize: "24px"}}/>}</>

  return (<button {...events} ref={ref} style={props.style} className={classes}
                  disabled={(props.disabled !== undefined && props.disabled) || props.loading}>
    {props.children}
    {props.loading ? loadingIcon : icon}
  </button>);
});
