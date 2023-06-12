import type { ReactElement, FC } from "react";
import styles from "./Loader.module.css";

interface ILoaderProps {
  isList: boolean;
}

export const Loader: FC<ILoaderProps> = ({ isList = false }): ReactElement => {
  return (
    <>
      {isList ? (
        new Array(10)
          .fill(<div className={`${styles.loading} isNoneList`} />)
          .map((el) => el)
      ) : (
        <div className={styles.loading} />
      )}
    </>
  );
};
