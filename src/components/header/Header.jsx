import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../imgs/Logo.svg";
import "./Header.css";
function Home() {
  return (
    <header className="header">
      <Link to="/">
        <img style={{ height: "5rem", width: "7rem" }} src={Logo} alt="Logo" />
      </Link>
      <nav className="nav">
        <Link to="/about" className="nav-link">
          <h2>Sobre Nós</h2>
        </Link>
        <Link to="/contact" className="nav-link">
          <h2>Contato</h2>
        </Link>
        <Link to="/login" className="nav-link">
          <button>Entrar</button>
        </Link>
      </nav>
    </header>
  );
}

export default Home;