import React from "react";
import styles from './Ubicame.module.css'
import img22 from "../../assets/contacto/img22.webp"
import img23 from "../../assets/contacto/img23.webp"
import img24 from "../../assets/contacto/img24.webp"
import img from "../../assets/contacto/Animacion.gif"
import img25 from '../../assets/contacto/img25.webp'
import img26 from '../../assets/contacto/img26.webp'
import img27 from '../../assets/contacto/img27.webp'
import img28 from '../../assets/contacto/img28.png'

export default function Ubicame() {
  return (
    <div className={styles.contenedor}>
      
      {/* GIF centrado */}
      <img className={styles.img} src={img} alt="Animación" />

      {/* Botones arriba */}
      <div className={styles.botonesContainer}>
        <a href="https://github.com/yorliana" target="_blank" className={styles.boton}>
          <img src={img22} alt="icono 1" />
        </a>
        <img src={img25} alt="" />
      </div>

      {/* Botones abajo */}
      <div className={styles.botonesContainer}>
        <a href="https://www.linkedin.com/in/yorlianamu%C3%B1oz/" target="_blank" className={styles.boton}>
          <img src={img23} alt="icono 2" />
        </a>
        <a href="https://whassapt" target="_blank" className={styles.boton}>
          <img className={styles.img28} src={img28} alt="icono 3" />
        </a>
        <a href="https://linkedin.com" target="_blank" className={styles.boton}>
          <img src={img24} alt="icono 4" />
        </a>
        <img src={img26} alt="" />
      </div>

      {/* Imagen adicional */}
      <div>
        <img src={img27} alt="" />
      </div>

    </div>
  );
};
