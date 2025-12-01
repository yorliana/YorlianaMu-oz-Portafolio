import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/landing/img3.webp";
import flecha from "../../assets/perfil/imgc.webp";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logoLink}>
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>

      {/* Menú escritorio */}
      <nav className={styles.nav}>
        <Link to="/proyectos" className={styles.a}>
          PROYECTOS
          <span className={styles.icon}>
            <img src={flecha} alt="flecha" />
          </span>
        </Link>

        <Link to="/conoceme" className={styles.a}>
          CONÓCEME
          <span className={styles.icon}>
            <img src={flecha} alt="flecha" />
          </span>
        </Link>

        <Link to="/skrills" className={styles.a}>
          SKILLS
          <span className={styles.icon}>
            <img src={flecha} alt="flecha" />
          </span>
        </Link>

        <Link to="/contacto" className={styles.a}>
          CONTACTO
          <span className={styles.icon}>
            <img src={flecha} alt="flecha" />
          </span>
        </Link>
      </nav>

      {/* Botón hamburguesa (móvil) */}
      <button
        className={styles.menuBtn}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Menú móvil */}
      {open && (
        <div className={styles.mobileNav} role="menu" aria-hidden={!open}>
          <Link to="/proyectos" className={styles.mobileItem} onClick={() => setOpen(false)}>
            PROYECTOS
            <span className={styles.icon}>
              <img src={flecha} alt="flecha" />
            </span>
          </Link>

          <Link to="/conoceme" className={styles.mobileItem} onClick={() => setOpen(false)}>
            CONÓCEME
            <span className={styles.icon}>
              <img src={flecha} alt="flecha" />
            </span>
          </Link>

          <Link to="/skrills" className={styles.mobileItem} onClick={() => setOpen(false)}>
            SKILLS
            <span className={styles.icon}>
              <img src={flecha} alt="flecha" />
            </span>
          </Link>

          <Link to="/contacto" className={styles.mobileItem} onClick={() => setOpen(false)}>
            CONTACTO
            <span className={styles.icon}>
              <img src={flecha} alt="flecha" />
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
