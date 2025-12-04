import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../../assets/trabajoss/img6.webp";
import flecha from "../../../assets/perfil/imgb.webp";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>

      {/* HAMBURGER BUTTON */}
      <div 
        className={`${styles.hamburger} ${open ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV */}
      <nav className={`${styles.nav} ${open ? styles.active : ""}`}>
        <Link to="/proyectos" className={styles.a}>
          PROYECTOS
          <span className={styles.icon}>
            <img src={flecha} alt="icono" />
          </span>
        </Link>

        <Link to="/conoceme" className={styles.a}>
          CONÓCEME
          <span className={styles.icon}>
            <img src={flecha} alt="icono" />
          </span>
        </Link>

        <Link to="/skrills" className={styles.a}>
          SKILLS
          <span className={styles.icon}>
            <img src={flecha} alt="icono" />
          </span>
        </Link>

        <Link to="/contacto" className={styles.a}>
          CONTACTO
          <span className={styles.icon}>
            <img src={flecha} alt="icono" />
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
