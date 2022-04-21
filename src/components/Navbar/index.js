import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="text-center d-flex justify-content-center">
        <NavLink
          to="/E-Commerce-Website/"
          className="p-3 d-block text-decoration-none"
        >
          Home
        </NavLink>
        <NavLink
          to="/E-Commerce-Website/products"
          className="p-3 d-block text-decoration-none"
        >
          Products
        </NavLink>
        <NavLink
          to="/E-Commerce-Website/addProducts"
          className="p-3 d-block text-decoration-none"
        >
          Add Products
        </NavLink>
      </nav>
    );
  }
}
