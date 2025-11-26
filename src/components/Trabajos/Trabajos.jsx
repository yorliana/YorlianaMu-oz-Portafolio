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
        link: "https://compu-shop-git-master-ctroubles.vercel.app/home",
    },
    {
      img: img2,
      titulo: "Donatella",
      tags: "#react #redux #node #styled-components #postgreSQL",
      fecha: "Junio, 2021",
      link: "https://compu-shop-git-master-ctroubles.vercel.app/home",
    },
    {
      img: img3,
      titulo: "Okey Website&Creativity",
      tags: "#react #redux #node #styled-components #MongoDbB",
      fecha: "Mayo, 2024",
      link: "https://okey-website-c1kjc9qro-yorlianas-projects.vercel.app/",
    },
  ];

  return (
    <div className={styles.container}>
      {trabajos.map((trabajo, index) => (
        <div key={index} className={styles.card}>
          
          <div className={styles.imageWrapper}>
            <a href={trabajo.link} target="_blank" rel="noopener noreferrer">
            <img src={trabajo.img} alt={trabajo.titulo} className={styles.image} />
         </a>
          </div>

          <h3 className={styles.title}>{trabajo.titulo}</h3>
          <p className={styles.tags}>{trabajo.tags}</p>
          <p className={styles.fecha}>{trabajo.fecha}</p>

        </div>
      ))}
    </div>
  );
}

