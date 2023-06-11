import type { FC, ReactElement } from "react";
import { ReactComponent as MenuIcon } from "../../../shared/assets/icons/menu.svg";
import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

export const Header: FC = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MenuIcon onClick={handleShow} />
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pages</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className={styles.nav}>
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/about">Обо мне</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};
