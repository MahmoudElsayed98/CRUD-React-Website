import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default class Products extends Component {
  componentDidMount() {
    const { products } = this.props;
    if (products.length === 0 && document.querySelector(".container button")) {
      document.querySelector(".container button").classList.add("d-none");
    }
  }
  render() {
    const { products } = this.props;
    if (products.length === 0 && localStorage.getItem("lastEditedProduct")) {
      localStorage.removeItem("lastEditedProduct");
      window.location.reload();
    }
    return (
      <div className="container p-4">
        <div className="row gap-2 justify-content-center fs-5">
          {products.length === 0
            ? "No Products To Show"
            : products.map((e) => {
                return (
                  <NavLink
                    to={"/CRUD-Website/products/" + e.id}
                    className="product rounded btn btn-primary text-center d-block text-decoration-none col-3 col-md-3 col-lg-2 col-xl-2 p-2 d-flex justify-content-center align-items-center"
                    key={e.id}
                  >
                    {/* {localStorage.getItem("lastEditedProduct" + e.id) &&
                    e.id ===
                      JSON.parse(
                        localStorage.getItem("lastEditedProduct" + e.id)
                      ).id
                      ? JSON.parse(
                          localStorage.getItem("lastEditedProduct" + e.id)
                        ).name
                      : e.name} */}
                    {/* {e.name} */}
                    <div className="image w-75">
                      <img src={e.image} alt={e.name} className="img-fluid" />
                    </div>
                  </NavLink>
                );
              })}
        </div>
        <button
          className="btn btn-primary w-25 p-2 d-block mx-auto mt-2"
          onClick={this.props.deleteAllProducts}
        >
          Delete All
        </button>
      </div>
    );
  }
}
