import React from "react";
import styles from "./Proyectos.module.css"
import img from "../../assets/landing/img3.webp"
import NavBar from "../../components/NavBar/NavBar";
import Trabajos from "../../components/Trabajos/Trabajos.jsx";


const Proyectos= () => {
  return (
    <div className={styles.div} >
   <NavBar/>
   <Trabajos/>
   
   </div>
  );
};

export default Proyectos;
