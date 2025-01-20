import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
function About() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none", }}>
        <GoHome />
        home
      </Link>
      <h1>About Page</h1>
    </div>
  );
}

export default About;
