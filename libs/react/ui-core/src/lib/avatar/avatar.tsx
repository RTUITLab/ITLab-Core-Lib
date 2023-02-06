import React from "react";
import {useAvatar} from "./useAvatar";
import {AvatarProps} from "./AvatarProps";
import styles from './avatar.module.scss'

export function Avatar(props: AvatarProps) {
  const {classes, fontSize, letter, handleSrcError, isSrcError} = useAvatar(props);

  return (
    <div className={classes}>
      {
        (props.src && !isSrcError)
          ? <img onError={handleSrcError} className={styles['avatar-image']} src={props.src} alt='' />
          : <span style={{fontSize: `${fontSize}px`}}>{letter}</span>
      }
    </div>
  );
}

export default Avatar;
