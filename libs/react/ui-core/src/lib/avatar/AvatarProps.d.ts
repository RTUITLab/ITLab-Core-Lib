export interface AvatarProps {
  /** Name of user */
  name?: string;

  /** Avatar size */
  size?: 120 | 96 | 72 | 48 | 36 | 24;

  /** Avatar color */
  color?: "primary" | "green" | "red" | "general";

  /** Link for image */
  src?: string
}
