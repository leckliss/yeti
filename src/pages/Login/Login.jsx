import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../imgs/Logo.svg";
import "./Login.css";
import Header from "../../components/header/Header";
import LoginComponent from "../../components/login/LoginComponent";
import RegisterComponent from "../../components/register/RegisterComponent";

function Login() {
  const [showLogin, setShowLogin] = useState(true); // Estado para controlar o componente exibido

  return (
    <div>
      <Header />
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {showLogin ? (
          <button
            onClick={() => setShowLogin(false)} // Alterna para o componente de registro
            style={{
              textDecoration: "none",
              background: "none",
              border: "1px solid #007bff",
              borderRadius: "5px",
              color: "#007bff",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Criar minha conta
          </button>
        ) : (
          <button
            onClick={() => setShowLogin(true)} // Volta para o componente de login
            style={{
              textDecoration: "none",
              background: "none",
              border: "1px solid #007bff",
              borderRadius: "5px",
              color: "#007bff",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Já tenho uma conta
          </button>
        )}
      </div>
      {showLogin ? <LoginComponent /> : <RegisterComponent />}
    </div>
  );
}

export default Login;
