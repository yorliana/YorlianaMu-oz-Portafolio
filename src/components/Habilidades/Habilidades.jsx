import React from "react"; 
import styles from './Habilidades.module.css'
import heroImage from "../../assets/habilidades/img13.webp"

export default function Habilidades() {

  return (
    <div className={styles.contenido}>

      {/* Línea superior */}
      <div className={styles.linea}></div>

      <div className={styles.wrapper}>
        
        {/* Imagen */}
        <div className={styles.imageContainer}>
          <img src={heroImage} alt="perfil" />
        </div>

        {/* Texto */}
        <div className={styles.textContainer}>
          <p className={styles.letras}>
            Html, Css, Js, React, <br />
            Redux, Expess, Bootstrap, <br />
            Tailwind, Node, PostgreSQL, <br />
            MongoDB etc. Pasarelas: <br />
            MercadoP-Paypal-Stripe <br /><br />
            <strong>Tools</strong><br /><br />
            VScode, Github y Figma
          </p>
        </div>

      </div>

    
  
    </div>
  );
}
