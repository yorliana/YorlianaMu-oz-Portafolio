import React from "react"; 
import styles from './Habilidades.module.css'
import heroImage from "../../assets/habilidades/img13.webp"
import img15 from '../../assets/habilidades/img15.webp'
import img16 from '../../assets/habilidades/img16.png'
import img14 from '../../assets/habilidades/img14.webp'

export default function Habilidades() {

  return (
  
    <div className={styles.container}>
      <div className={styles.heroImage}>
        <img className={styles.cuadro} src={img15} alt="" />
          <img src={heroImage} alt="perfil" />
          <img className={styles.y} src={img14}  alt="" />
        </div>
    <div className= {styles.linea}>
      <hr classname={styles.linea}/>
     <div className={styles.h1}>
      <h1 className={styles.h1}>Multitask Comprometida Creativa </h1></div>
<img  className={styles.cuadros} src={img16}alt="" />
      <hr classname={styles.linea}/>
        
    
     
      <div className={styles.wrapper}>
   
    
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

    
  
    </div>
  );
}
