import React from "react";
import { NavLink } from "react-router-dom";

import "../footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h3>Sobre Nós</h3>
            <p>
              Criamos sites e soluções digitais personalizadas para empresas de
              todos os tamanhos.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Institucional</h3>
          <ul className="footer-list">
            <li>
              <NavLink to="/" className="footer-link" activeClassName="active">
                Página inicial
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre"
                className="footer-link"
                activeClassName="active"
              >
                Sobre Nós
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                className="footer-link"
                activeClassName="active"
              >
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projetos"
                className="footer-link"
                activeClassName="active"
              >
                Projetos
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <ul>
            <li>✉ contato@alanrocha.dev.br </li>
            <li>📞(21) 9985-79960</li>

            <li>🏢 Endereço: Rio de Janeiro, RJ</li>
            <br />
            <li>
              <a href="/privacidade" className="footer-link active">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 alanrocha.dev.br</p>
      </div>
    </footer>
  );
};

export default Footer;
