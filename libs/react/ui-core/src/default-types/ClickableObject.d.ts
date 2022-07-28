import React from "react";

export interface ClickableObject{
  /** On click event */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On hover event */
  onHover?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On focus event */
  onFocus?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On blur event */
  onBlur?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On mouse enter event */
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On mouse leave event */
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On mouse down event */
  onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On mouse up event */
  onMouseUp?: (event: React.MouseEvent<HTMLElement>) => void;

  /** On key down event */
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;

  /** On key up event */
  onKeyUp?: (event: React.KeyboardEvent<HTMLElement>) => void;

  /** On key press event */
  onKeyPress?: (event: React.KeyboardEvent<HTMLElement>) => void;

  /** On touch start event */
  onTouchStart?: (event: React.TouchEvent<HTMLElement>) => void;

  /** On touch move event */
  onTouchMove?: (event: React.TouchEvent<HTMLElement>) => void;

  /** On touch end event */
  onTouchEnd?: (event: React.TouchEvent<HTMLElement>) => void;

  /** On touch cancel event */
  onTouchCancel?: (event: React.TouchEvent<HTMLElement>) => void;

  /** On pointer down event */
  onPointerDown?: (event: React.PointerEvent<HTMLElement>) => void;

  /** On pointer move event */
  onPointerMove?: (event: React.PointerEvent<HTMLElement>) => void;

  /** On pointer up event */
  onPointerUp?: (event: React.PointerEvent<HTMLElement>) => void;

  /** On pointer cancel event */
  onPointerCancel?: (event: React.PointerEvent<HTMLElement>) => void;

  /** On get pointer capture event */
  onGotPointerCapture?: (event: React.PointerEvent<HTMLElement>) => void;

  /** On lost pointer capture event */
  onLostPointerCapture?: (event: React.PointerEvent<HTMLElement>) => void;

  /** On pointer enter event */
  onPointerEnter?: (event: React.PointerEvent<HTMLElement>) => void;

  /** On pointer leave event */
  onPointerLeave?: (event: React.PointerEvent<HTMLElement>) => void;

  /** On pointer over event */
  onPointerOver?: (event: React.PointerEvent<HTMLElement>) => void;

  /** On pointer out event */
  onPointerOut?: (event: React.PointerEvent<HTMLElement>) => void;
}
