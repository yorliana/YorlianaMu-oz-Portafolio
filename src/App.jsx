import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/Pages/Home/Home.jsx"
import Proyectos from "../src/Pages/Proyectos/Proyectos.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Conoceme from "../src/Pages/Conoceme/Conoceme.jsx";
import Skrills from "./Pages/Skrills/Skrills.jsx";
import "./App.css";
function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos/>} />
          <Route path="/conoceme" element={<Conoceme/>} />
          <Route path="/skrills" element={<Skrills/>} />
          
        {/* Más rutas aquí si quieres */}
      </Routes>
    </Router>
  );
}

export default App;
