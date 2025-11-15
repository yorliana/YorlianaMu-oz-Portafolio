import React from "react";
import styles from './Perfil.module.css'
import NavBar from "../NavBar/NavBar.jsx"
import img from "../../assets/perfil/imgd.webp"
import heroImage from "../../assets/perfil/imge.webp"
import imglogo from "../../assets/perfil/imgf.webp"
export default function Perfil() {



  

  return (
  <>

  
 <div className={styles.hero}>
      <div className={styles.text}>
        <img className={styles.img} src={img}  />
        
        <p className={styles.p}>
        <h1>   Ingeniera en Telecomunicaciones <br /></h1>
 Egresada año 2010
 Venezuela <br />
 Curso intensivo en Henry año 2023
 Developer Full Stack <br />
 Frontend Developer
 Tengo experiencia y habilidades en el <br />
desarrollo web y Ecommerce. <br />
 Me encanta diseñar , ya que tengo mucha <br />
creatividad al momento de realizar un sitio <br />
web <br />
 Residenciada en España <br />
        </p>
      </div>
      <div className={styles.image}>
        <img src={heroImage} alt="Workspace" />
      </div>
        <div className={styles.logo}>
        <img src={imglogo} alt="Workspace" />
      </div>
      
    </div>

  
   </>
  );
};
