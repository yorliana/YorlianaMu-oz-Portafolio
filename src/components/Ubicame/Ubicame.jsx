import React from "react";
import styles from './Ubicame.module.css'
import img22 from "../../assets/contacto/img22.webp"
import img23 from "../../assets/contacto/img23.webp"
import img24 from "../../assets/contacto/img24.webp"
import img from "../../assets/contacto/Animacion.gif"


export default function Ubicame() {



  

  return (
  <>

  <div className={styles.contenedor}>
  

<img  className={styles.img} src={img}alt="" />
  <div className={styles.botonesContainer}>

      <a href="https://github.com/yorliana" target="_blank" className={styles.boton}>
        <img src={img22} alt="icono 1" />
      </a>

      <a href="https://www.linkedin.com/in/yorlianamu%C3%B1oz/" target="_blank" className={styles.boton}>
        <img src={img23} alt="icono 2" />
      </a>

      <a href="https://github.com" target="_blank" className={styles.boton}>
        <img src={img22} alt="icono 3" />
      </a>

      <a href="https://linkedin.com" target="_blank" className={styles.boton}>
        <img src={img24} alt="icono 4" />
      </a>

    </div>


   
        
      </div>
  
   </>
  );
};
