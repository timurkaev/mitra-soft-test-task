import type { FC } from "react";
import styles from "./PageLoader.module.css";

export const PageLoader: FC = () => (
  <div className={styles.loader}>loading</div>
);
