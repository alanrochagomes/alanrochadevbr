import React from "react";
import "../../components/navbar/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="https://flowbite.com/" className="navbar-brand">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="navbar-logo"
            alt="Flowbite Logo"
          />
          <span className="navbar-title">alanrocha.dev</span>
        </a>
        <button
          className="navbar-toggle"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
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
        <div className="navbar-menu" id="navbar-default">
          <ul className="navbar-list">
            <li>
              <a href="#" className="navbar-link active">
                Página inicial
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Sobre Nós
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Projetos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
