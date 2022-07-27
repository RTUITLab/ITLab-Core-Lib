import './icon.scss';
import {forwardRef, useCallback, useMemo} from "react";
import {IconProps} from "./IconProps";
import {getAllEvents} from "../../utils/getAllEvents";

/**
 * Here the icons are taken from: https://remixicon.com/
 */

// TODO: удалить белый цвет. Он должен сам заменяться при смене темы, а не быть захардкоженным.

export const Icon = forwardRef(({size = 24, color = "primary", type = "fill", name,...props}: IconProps, ref: any) => {
  const camelToKebab = useCallback((str: string) => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }, []);

  const events=useMemo(() => {
    return getAllEvents(props)
  },[props]);

  const classes = useMemo(() => {
    return `button-icon ${camelToKebab(color)} ri-${camelToKebab(name.replace(new RegExp('(ri\\-|\\-fill|\\-line)', "gmi"), ""))}-${type}`;
  }, [color, type, name]);

  return (<i {...events} ref={ref} className={classes+" "+(props?.className??"")} style={{fontSize: `${size}px`,...props.style}}/>);
})

export default Icon;
