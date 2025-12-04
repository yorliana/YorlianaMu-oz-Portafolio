import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../../assets/habilidades/img10.webp";
import flecha from "../../../assets/habilidades/img12.webp";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>

      {/* HAMBURGUESA */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
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
