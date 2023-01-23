import {useCallback, useEffect, useMemo, useState} from 'react'
import styles from "./avatar.module.scss";
import {AvatarProps} from "./AvatarProps";

export function useAvatar(props: AvatarProps) {
  const [isSrcError, setIsSrcError] = useState(false)

  const handleSrcError = useCallback(() => {
    return setIsSrcError(true)
  }, [])

  useEffect(() => {
    setIsSrcError(false)
  }, [props.src])

  const classes = useMemo(() => {
    const classList = [styles['avatar']];
    classList.push(styles[`avatar-${props.size}`]);
    classList.push(styles[`avatar-${props.color}`]);
    return classList.join(" ");
  }, [props.size, props.color]);

  const letter = useMemo(() => {
    return props.name ? props.name[0] : null
  }, [props.name])

  const fontSize = useMemo(() => {
    let size = 48;

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
    if (props.name) {
      return size;
    } else {
      return 0;
    }
  }, [props.name, props.size]);
  return {classes, fontSize, letter, handleSrcError, isSrcError};
}
