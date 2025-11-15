import React from "react";
import styles from './Habilidades.module.css'
import NavBar from "./NavBar/NavBar.jsx"
import img from "../../assets/perfil/imgd.webp"
import heroImage from "../../assets/habilidades/img13.webp"
import imglogo from "../../assets/perfil/imgf.webp"


export default function Habilidades() {



  

  return (
    <div className={styles.contenido}>
 

  <div className={styles.image}>
        <img src={heroImage} alt="Workspace" />
      </div>
  <div className={styles.letra}> 
 <p > Html, Css, Js, React, <br />
Redux,Expess, Bootstrap, <br />
Tailwind, Node, PostgreSQL, <br />
MongoDB etc. Pasarelas: <br />
MercadoP-Paypal-Stripe <br />
 Tools <br /> <br />
 VScode, Github y Figma</p>
</div>   
      

   
   </div>
  );
};
