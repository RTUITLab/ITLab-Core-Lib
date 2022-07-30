import {useMemo} from "react";
import styles from "./avatar.module.scss";
import {AvatarProps} from "./AvatarProps";

export function useAvatar(props: AvatarProps) {
  const classes = useMemo(() => {
    const classList = [styles['avatar']];
    classList.push(styles[`avatar-${props.size}`]);
    classList.push(styles[`avatar-${props.color}`]);
    return classList.join(" ");
  }, [props.size, props.color]);

  const fontSize = useMemo(() => {
    let size = 48;
    const k = 2.2;

    switch (props.size) {
      case 120:
        size = 64;
        break;
      case 72:
        size = 32;
        break;
      case 48:
        size = 24;
        break;
      case 36:
        size = 18
        break;
      case 24:
        size = 14;
        break;
      default:
        break;
    }
    if (props.children) {
      if (props.children.toString().length === 1) {
        return size;
      } else if (props.children.toString().length === 2) {
        return size / 1.2;
      } else {
        return size / props.children.toString().length * k;
      }
    } else {
      return 0;
    }
  }, [props.children, props.size]);
  return {classes, fontSize};
}
