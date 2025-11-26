import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/landing/img3.webp";
import flecha from "../../assets/perfil/imgc.webp";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="logo" />

      <nav className={styles.nav}>
        <a className={styles.a} href="/proyectos">
          PROYECTOS
          <span className={styles.icon}>
            <img src={flecha} alt="icono" />
          </span>
        </a>

        <a className={styles.a} href="/conoceme">
          CONÓCEME
          <span className={styles.icon}>
            <img src={flecha} alt="icono" />
          </span>
        </a>

        <a className={styles.a} href="/skrills">
          SKILLS
          <span className={styles.icon}>
            <img src={flecha} alt="icono" />
          </span>
        </a>

        <a className={styles.a} href="/contacto">
          CONTACTO
          <span className={styles.icon}>
            <img src={flecha} alt="icono" />
          </span>
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
