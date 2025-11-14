import React from "react";
import styles from "./Header.module.css";
import img from "../../assets/landing/img3.webp"
const Header = () => {
  return (
    <header className={styles.header}>
        <img src= {img} alt="" />
     
      <nav className={styles.nav}>
        <a href="#proyectos">PROYECTOS</a>
        <a href="#conoceme">CONÓCEME</a>
        <a href="#skills">SKILLS</a>
        <a href="#contacto">CONTACTO</a>
      </nav>
    </header>
  );
};

export default Header;
