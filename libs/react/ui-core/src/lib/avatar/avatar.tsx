import React from "react";
import {useAvatar} from "./useAvatar";
import {AvatarProps} from "./AvatarProps";

export function Avatar(props: AvatarProps) {

  const {classes, fontSize} = useAvatar(props);

  return (
    <div className={classes}>
      <span style={{fontSize: `${fontSize}px`}}>{props.children}</span>
    </div>
  );
}

export default Avatar;
