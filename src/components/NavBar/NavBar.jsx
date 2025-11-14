
import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/landing/img1.webp"; // pon aquí la imagen de tu screenshot


export default function NavBar() {



  

  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>
          <span className={styles.white}>CONSTRUYENDO </span>
          <span className={styles.purple}>ESPACIOS</span>
          <span className={styles.white}> PARA EL FUTURO</span>
        </h1>
        <p>
          Creando experiencias inmersivas <br />
           e interactivas para marcas. <br /> <br />
          Aquí podrás ver mis trabajos, <br />
           echa un vistazo!
        </p>
      </div>
      <div className={styles.image}>
        <img src={heroImage} alt="Workspace" />
      </div>
    </section>
  );
};
