import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import "./RegisterComponent.css";
function RegisterComponent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">

      <label>Nome:</label>
      <input
        type="text"
        placeholder="Digite seu nome"
        required
        style={{ display: "block", padding: "8px", marginTop: "5px" }}
      />

      <label>Email:</label>
      <input
        type="email"
        placeholder="Digite seu email"
        required
        style={{ display: "block", padding: "8px", marginTop: "5px" }}
      />


      <label>Senha:</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        required
        style={{ display: "block", padding: "8px", marginTop: "5px" }}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default RegisterComponent;
