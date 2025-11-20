import React from "react";
import styles from "./Trabajos.module.css";
import img1 from "../../assets/trabajoss/compushop.png";
import img2 from "../../assets/trabajoss/donatella.png";
import img3 from "../../assets/trabajoss/okey.png";


export default function Trabajos() {


  const trabajos = [
    {
      img: img1,
      titulo: "CompuShop",
      tags: "#react #redux #node #styled-components #postgreSQL",
      fecha: "Enero, 2023",
    },
    {
      img: img2,
      titulo: "Donatella",
      tags: "#react #redux #node #styled-components #postgreSQL",
      fecha: "Junio, 2021",
    },
    {
      img: img3,
       titulo: "Okey Website&Creativity",
      tags: "#react #redux #node #styled-components #MongoDbB",
      fecha: "Mayo, 2024",
    },
    
  ];

  return (
    <div className={styles.container}>
      {trabajos.map((trabajo, index) => (
        <div key={index} className={styles.card}>
          <img src={trabajo.img} alt={trabajo.titulo} className={styles.image} />

          <h3 className={styles.title}>{trabajo.titulo}</h3>

          <p className={styles.tags}>{trabajo.tags}</p>

          <p className={styles.fecha}>{trabajo.fecha}</p>
        </div>
      ))}
    </div>
  );
}
