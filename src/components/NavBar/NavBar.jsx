import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/landing/img3.webp";
import flecha from "../../assets/perfil/imgc.webp";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <Link to="/">
       <img className={styles.logo} src={logo} alt="logo" />
     </Link>

      <nav className={styles.nav}>
        <Link to="/proyectos" className={styles.a} >
          PROYECTOS
          <span className={styles.icon}>
            <img src={flecha} alt="icono" />
          </span>
        </Link>

        <Link to="/conoceme" className={styles.a}>CONÓCEME
          <span className={styles.icon}>
            <img src={flecha} alt="icono" />
          </span>
        </Link>

        <Link to="/skrills" className={styles.a}>
          SKILLS
          <span className={styles.icon}>
            <img src={flecha} alt="icono"  />
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
