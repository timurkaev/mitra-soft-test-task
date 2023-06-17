import type { FC } from "react";
import styles from "./Avatar.module.css";
import cn from "classnames";
import UserIcon from "../../assets/icons/user.svg";

export interface IAvatarProps {
  src: string;
  className?: string;
}

export const Avatar: FC<IAvatarProps> = ({ src, className }): JSX.Element => {
  const isImage = src ? src : UserIcon;

  return (
    <div className={styles.avatarBg}>
      <img
        loading="lazy"
        className={cn(styles.avatar, className)}
        src={isImage}
        alt="avatar"
      />
    </div>
  );
};
