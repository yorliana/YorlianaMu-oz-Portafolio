import React from "react";
import styles from './Perfil.module.css'
import NavBar from "../NavBar/NavBar.jsx"
import img from "../../assets/perfil/imgd.webp"
import heroImage from "../../assets/perfil/imge.webp"
import imglogo from "../../assets/perfil/imgf.webp"
export default function Perfil() {



  

  return (
  <>

  <div className={styles.contenedor }>
        <div className={styles.foto}>
          <img  src={img}  />
           
  
      <div className={styles.text}> 
        
          
            <p className={styles.p}> <p className={styles.p1} >Ingeniera en Telecomunicaciones </p>
                           Egresada año 2010 <br />
                            Venezuela <br /> <br />
                          Curso intensivo en Henry año 2023 <br />
                          Developer Full Stack <br /> <br />
                          Frontend Developer <br />
                          Tengo experiencia y habilidades en el <br />
                          desarrollo web y Ecommerce. <br /> <br />
                          Me encanta diseñar , ya que tengo mucha <br /> 
                          creatividad al momento de realizar un sitio <br />
                          web <br /> 
                          
                          Residenciada en España <br />

          </p>

      </div>
    
   
           </div>
    
        <div className={heroImage}>
          <img src={heroImage} alt="Workspace" />
             </div>
  
        </div>


   
      <div className={styles.logo}>
        <img src={imglogo} alt="Workspace" />
      </div>
      
      
      
      
   </>
  );
};
