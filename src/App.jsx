import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/Pages/Home/Home.jsx"
import Proyectos from "../src/Pages/Proyectos/Proyectos.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Conoceme from "../src/Pages/Conoceme/Conoceme.jsx";


function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos/>} />
          <Route path="/conoceme" element={<Conoceme/>} />
          
        {/* Más rutas aquí si quieres */}
      </Routes>
    </Router>
  );
}

export default App;
