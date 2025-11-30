import React from "react";
import styles from "./Ubicame.module.css"
import img22 from "../../assets/contacto/img22.webp"
import img24 from "../../assets/contacto/img24.webp";
import img25 from "../../assets/contacto/img25.webp";
import img26 from "../../assets/contacto/img26.webp";
import img27 from "../../assets/contacto/img27.webp";
import img23 from "../../assets/contacto/img23.webp"
import imgAnim from "../../assets/contacto/imfondo.png";

export default function Ubicame() {
  return (
    <>
    
  <div className={styles.contenedor}>

  <div className={styles.areaCentral}>
    
    <img className={styles.gifDetras} src={imgAnim} alt="Animación" />

   
    <div className={styles.gridGithub}>
      <img className={styles.imgBottom} src={img27} alt="" /> 
      <a href="https://github.com/yorliana" target="_blank" className={styles.caja1}>
        <img src={img22} alt="GitHub" />
      </a>

         </div>
<div className={styles.gridGmail}>
      <a href="https://mail.google.com/mail/u/0/#inbox?authuser=ing.yorlianam24@gmail.com" target="_blank" className={styles.caja1}>
        <img src={img24} alt="LinkedIn" />
        
      </a><img src={img25} alt="LinkedIn" />
</div>
     
<div className={styles.gridLinkedin}>
  <img src={img26} alt="Gmail" />
      <a href="https://linkedin.com" target="_blank" className={styles.caja1}>
        <img src={img23} alt="" /> 
      </a>
      
</div>
     



  </div>

 

</div>

   
   </>
  );
};




