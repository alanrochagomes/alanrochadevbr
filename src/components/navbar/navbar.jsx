import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../components/navbar/navbar.css";

import Logo from "../../assets/ALANROCHA.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          <img src={Logo} className="navbar-logo" alt="AlanRocha.Dev Logo" />
          <span className="navbar-title">alanrocha.dev</span>
        </a>

        <button
          onClick={toggleMenu}
          className="navbar-toggle"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only"></span>
          <svg
            className="navbar-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`navbar-menu ${isOpen ? "open" : ""}`}
          id="navbar-default"
        >
          <ul className="navbar-list">
            <li>
              <NavLink to="/" className="navbar-link" activeClassName="active">
                Página inicial
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre"
                className="navbar-link"
                activeClassName="active"
              >
                Sobre Nós
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                className="navbar-link"
                activeClassName="active"
              >
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projetos"
                className="navbar-link"
                activeClassName="active"
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <a
                href="mailto:contato@alanrocha.dev.br"
                className="btn btn--primary"
              >
                Entrar em Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
