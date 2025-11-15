
import React from "react";
import styles from "./Landing.module.css";
import heroImage from "../../assets/landing/img1.webp"; // pon aquí la imagen de tu screenshot
import img2 from "../../assets/landing/img2.webp"

export default function Landing() {



  

  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <img className={styles.img} src={img2}  />
        <p className={styles.p}>
          Creando experiencias inmersivas <br />
           e interactivas para marcas. <br /> <br />
          Aquí podrás ver mis trabajos, <br />
           echa un vistazo!
        </p>
      </div>
      <div className={styles.image}>
        <img src={heroImage} alt="Workspace" />
      </div>
    </div>
  );
};
