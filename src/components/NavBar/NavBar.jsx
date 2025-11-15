import React from "react";
import styles from "./NavBar.module.css";
import img from "../../assets/landing/img3.webp"
import img4 from "../../assets/landing/img4.webp"
const NavBar = () => {
  return (
    <header className={styles.navbar}>
        <img src= {img} alt="" />
     
      <nav className={styles.nav}>
        <a className={styles.a} href="/proyectos">PROYECTOS</a> 
  

        <a className={styles.a} href="/conoceme">CONÓCEME</a>
        <a className={styles.a} href="#skills">SKILLS</a>
        <a className={styles.a}href="#contacto">CONTACTO</a>
      </nav>
    </header>
  );
};

export default NavBar;
