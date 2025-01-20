import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

function Contact() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none",}}>
        <GoHome />
        home
      </Link>
      <h1>Contact Page</h1>
    </div>
  );
}

export default Contact;
