import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../imgs/Logo.svg";
import "./Home.css";
import Header from "../../components/header/Header";
function Home() {
  return (
    <div className="main">
      <Header/>
    </div>
  );
}

export default Home;