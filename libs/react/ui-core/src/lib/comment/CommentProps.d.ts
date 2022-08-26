import React from "react";
import {DefaultParams} from "../../default-types/defaultParams";
import Avatar from '../avatar/avatar'

export interface CommentProps extends DefaultParams {

  /** Nested comments */
  children?: React.ReactNode | string;

  /** Avatar object */
  avatar?: React.ReactNode<Avatar>;

  /** Nickname of the comment author */
  author: string;

  /** Identification of the comment */
  commentId: string | number;

  /** Text of the comment */
  content?: string;

  /** Reply to comment event */
  onReply?: (e: React.MouseEvent<HTMLElement>, content: string) => void;

  /** Like comment event */
  onLike?: (e: React.MouseEvent<HTMLElement>, commentId: string | number) => void;

  /** Dislike comment event */
  onDislike?: (e: React.MouseEvent<HTMLElement>, commentId: string | number) => void;

  /** Time and date of comment */
  dateTime?: string;

  /** It specifies that comment is liked or disliked */
  rateType?: 'like' | 'dislike';

  /** It specifies that comment has likes and dislikes */
  isRate?: boolean;

  /** Count of likes at comment */
  likeCount?: number

  /** Count of dislikes at comment */
  dislikeCount?: number
}
