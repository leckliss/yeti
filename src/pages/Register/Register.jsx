import React from "react";
import { Link } from "react-router-dom";
function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            required
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Digite seu email"
            required
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            required
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
