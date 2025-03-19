import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Home from "./home/home";
import Sobre from "./sobre/sobre";
import Contato from "./contato/contato";
import Projeto from "./projetos/projeto";

import Privacidade from "./privacidade/privacidade";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/projetos" element={<Projeto />} />

            <Route path="/privacidade" element={<Privacidade />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
