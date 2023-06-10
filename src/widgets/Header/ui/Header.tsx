import type { FC, ReactElement } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header: FC = (): ReactElement => {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Главная страница</Link>
        </li>
        <li>
          <Link to="/about">Обо мне</Link>
        </li>
      </ul>
    </header>
  );
};
