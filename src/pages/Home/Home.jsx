import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../imgs/Logo.svg";
function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"  }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width:'100%', height:'10vh' }}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Cadastrar</button>
        </Link>
        <Link to="/about">
          <button>Sobre Nós</button>
        </Link>
        <Link to="/contact">
          <button>Contato</button>
        </Link>
      </div>
      <img src={Logo} alt="Logo" />
    </div>
  );
}

export default Home;