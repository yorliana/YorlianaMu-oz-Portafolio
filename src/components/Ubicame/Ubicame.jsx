import React from "react";
import styles from "./Ubicame.module.css"
import img22 from "../../assets/contacto/img22.webp"
import img23 from "../../assets/contacto/img23.webp";
import img25 from "../../assets/contacto/img23.webp";
import img26 from "../../assets/contacto/img26.webp";
import img27 from "../../assets/contacto/img27.webp";
import img28 from "../../assets/contacto/img28.png";
import imgAnim from "../../assets/contacto/Animacion.gif";

export default function Ubicame() {
  return (
    <>
    
  <div className={styles.contenedor}>

  {/* CONTENEDOR DEL GIF + ICONOS */}
  <div className={styles.areaCentral}>

    {/* GIF detrás */}
    <img className={styles.gifDetras} src={imgAnim} alt="Animación" />

    {/* GRID de íconos */}
    <div className={styles.grid}>
      
      <a href="https://github.com/yorliana" target="_blank" className={styles.caja}>
        <img src={img22} alt="GitHub" />
      </a>

      <div className={styles.cajaDecoracion}>
        <img src={img25} alt="" />
      </div>

      <a href="https://www.linkedin.com/in/yorlianamu%C3%B1oz/" target="_blank" className={styles.caja}>
        <img src={img23} alt="LinkedIn" />
      </a>

      <a href="https://whatsapp.com" target="_blank" className={styles.caja}>
        <img src={img28} alt="WhatsApp" />
      </a>

      <a href="https://gmail.com" target="_blank" className={styles.caja}>
        <img src={img25} alt="Gmail" />
      </a>

      <div className={styles.cajaDecoracion}>
        <img src={img26} alt="" />
      </div>

    </div>

  </div>

  <img className={styles.imgBottom} src={img27} alt="" />

</div>

   
   </>
  );
};




