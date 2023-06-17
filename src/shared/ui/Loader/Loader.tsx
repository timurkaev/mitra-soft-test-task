import { type ReactElement, type FC, Fragment } from "react";
import styles from "./Loader.module.css";

interface ILoaderProps {
  isList?: boolean;
}

export const Loader: FC<ILoaderProps> = ({ isList = false }): ReactElement => {
  return (
    <>
      {isList ? (
        new Array(10)
          .fill(<div className={`${styles.loading} isNoneList`} />)
          .map((el, i) => <Fragment key={i}>{el}</Fragment>)
      ) : (
        <div className={styles.loading} />
      )}
    </>
  );
};
