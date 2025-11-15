import React from "react";
import styles from "./Home.module.css";
import img from "../../assets/landing/img3.webp"
import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../components/Landing/Landing";


const Home = () => {
  return (
    <div>
   <NavBar/>
   <Landing/>
   </div>
  );
};

export default Home;
