import type { FC, ReactElement } from "react";
import { ReactComponent as MenuIcon } from "../../../shared/assets/icons/menu.svg";
import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Button, Offcanvas } from "react-bootstrap";
import { useTheme } from "../../../app/providers/ThemeProvider/lib/useTheme";

export const Header: FC = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false);
  const { toggleTheme, theme } = useTheme();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MenuIcon onClick={handleShow} />
        <span className={styles.title}>
          mitra<span>SOFT</span>
        </span>
      </div>
      <Offcanvas
        style={{
          backgroundColor: theme === "dark" ? "#1d232a" : "#ffffff",
          borderRight: "1px solid #e7e8ec",
        }}
        backdrop={false}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header
          closeButton
          closeVariant={theme === "dark" ? "white" : "black"}
        >
          <Offcanvas.Title
            style={{ color: theme === "light" ? "#1d232a" : "#ffffff" }}
          >
            Pages
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className={styles.nav}>
            <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/about">Обо мне</Link>
            </li>
            <li>
              <Button
                style={{
                  backgroundColor: theme === "dark" ? "#ffffff" : "#1d232a",
                  color: theme === "dark" ? "#000000" : "#ffffff",
                  border: "none",
                }}
                onClick={toggleTheme}
                variant={"primary"}
              >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};
