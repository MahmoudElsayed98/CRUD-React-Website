import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProducts from "./components/AddProducts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { data } from "./components/Data";
import Details from "./components/Details";
export default class App extends Component {
  state = {
    products: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : data,
    // id: !localStorage.getItem("lastEditedProduct")
    //   ? ""
    //   : localStorage.getItem(
    //       "lastEditedProduct" +
    //         JSON.parse(localStorage.getItem("lastEditedProduct")).id
    //     )
    //   ? JSON.parse(
    //       localStorage.getItem(
    //         "lastEditedProduct" +
    //           JSON.parse(localStorage.getItem("lastEditedProduct")).id
    //       )
    //     ).id
    //   : JSON.parse(localStorage.getItem("CurrentProduct")).id,
    id: localStorage.getItem("lastEditedProduct")
      ? JSON.parse(localStorage.getItem("lastEditedProduct")).id
      : "",
    // name: !localStorage.getItem("lastEditedProduct")
    //   ? ""
    //   : localStorage.getItem(
    //       "lastEditedProduct" +
    //         JSON.parse(localStorage.getItem("lastEditedProduct")).id
    //     )
    //   ? JSON.parse(
    //       localStorage.getItem(
    //         "lastEditedProduct" +
    //           JSON.parse(localStorage.getItem("lastEditedProduct")).id
    //       )
    //     ).name
    //   : JSON.parse(localStorage.getItem("CurrentProduct")).name,
    name: localStorage.getItem("lastEditedProduct")
      ? JSON.parse(localStorage.getItem("lastEditedProduct")).name
      : "",
    // price: !localStorage.getItem("lastEditedProduct")
    //   ? ""
    //   : localStorage.getItem(
    //       "lastEditedProduct" +
    //         JSON.parse(localStorage.getItem("lastEditedProduct")).id
    //     )
    //   ? JSON.parse(
    //       localStorage.getItem(
    //         "lastEditedProduct" +
    //           JSON.parse(localStorage.getItem("lastEditedProduct")).id
    //       )
    //     ).price
    //   : JSON.parse(localStorage.getItem("CurrentProduct")).price,
    price: localStorage.getItem("lastEditedProduct")
      ? JSON.parse(localStorage.getItem("lastEditedProduct")).price
      : "",
    // brand: !localStorage.getItem("lastEditedProduct")
    //   ? ""
    //   : localStorage.getItem(
    //       "lastEditedProduct" +
    //         JSON.parse(localStorage.getItem("lastEditedProduct")).id
    //     )
    //   ? JSON.parse(
    //       localStorage.getItem(
    //         "lastEditedProduct" +
    //           JSON.parse(localStorage.getItem("lastEditedProduct")).id
    //       )
    //     ).brand
    //   : JSON.parse(localStorage.getItem("CurrentProduct")).brand,
    brand: localStorage.getItem("lastEditedProduct")
      ? JSON.parse(localStorage.getItem("lastEditedProduct")).brand
      : "",
    image: localStorage.getItem("lastEditedProduct")
      ? JSON.parse(localStorage.getItem("lastEditedProduct")).image
      : "",
  };
  changeState = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.firstElementChild.nextElementSibling.lastElementChild.value !==
        "" &&
      e.target.firstElementChild.nextElementSibling.nextElementSibling
        .nextElementSibling.lastElementChild.value !== ""
    ) {
      if (e.target.lastElementChild.value === "Add Product") {
        this.setState(
          {
            products: [
              ...this.state.products,
              {
                id: this.state.products.length + 1,
                name: this.state.name,
                price: this.state.price,
                brand: this.state.brand,
                image: require("./assets/" + this.state.image.substr(12)),
              },
            ],
          },
          () => {
            localStorage.setItem(
              "products",
              JSON.stringify(this.state.products)
            );
          }
        );
      } else {
        this.state.products.forEach((ele) => {
          if (ele.id === this.state.id) {
            ele.name = this.state.name;
            ele.price = this.state.price;
            ele.brand = this.state.brand;
            ele.image = require("./assets/" + this.state.image.substr(12));
            localStorage.setItem(
              "lastEditedProduct" + ele.id,
              JSON.stringify(ele)
            );
          }
          localStorage.setItem("products", JSON.stringify(this.state.products));
        });
        localStorage.removeItem("lastEditedProduct");
      }
      window.location.pathname = "/E-Commerce-Website/products";
    }
  };
  updateProduct = () => {
    window.location.pathname = "/E-Commerce-Website/addProducts";
    localStorage.setItem(
      "lastEditedProduct",
      JSON.stringify(JSON.parse(localStorage.getItem("CurrentProduct")))
    );
    localStorage.setItem("products", JSON.stringify(this.state.products));
  };
  deleteProduct = () => {
    // console.log(this.state.products);
    localStorage.setItem(
      "LastDeletedProduct",
      JSON.stringify(JSON.parse(localStorage.getItem("CurrentProduct")))
    );
    let newProducts = this.state.products.filter((e) => {
      return JSON.parse(localStorage.getItem("CurrentProduct")).id !== e.id;
    });
    // console.log(newProducts);
    newProducts.forEach((e) => {
      return e.id > JSON.parse(localStorage.getItem("CurrentProduct")).id
        ? --e.id
        : e.id;
    });
    // if (
    //   localStorage.getItem(
    //     "lastEditedProduct" +
    //       JSON.parse(localStorage.getItem("CurrentProduct")).id
    //   )
    // ) {
    //   localStorage.removeItem(
    //     "lastEditedProduct" +
    //       JSON.parse(localStorage.getItem("CurrentProduct")).id
    //   );
    // }
    // console.log(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
    window.location.pathname = "/E-Commerce-Website/products/";
  };
  deleteAllProducts = (e) => {
    this.setState({
      products: "",
    });
    e.target.classList.add("d-none");
    localStorage.setItem("products", JSON.stringify([]));
    // e.target.classList.add("opacity-0");
  };
  discardChanges = (e) => {
    localStorage.removeItem("lastEditedProduct");
    window.location.reload();
    e.target.classList.add("d-none");
    e.target.classList.add("opacity-0");
  };
  render() {
    console.log(this.state.products);
    // window.onload = () => {
    //   localStorage.removeItem("lastEditedProduct");
    // };
    // localStorage.clear();
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/E-Commerce-Website" element={<Home />} />
          <Route
            path="/E-Commerce-Website/products"
            element={
              <Products
                products={this.state.products}
                deleteAllProducts={this.deleteAllProducts}
              />
            }
          />
          <Route
            path="/E-Commerce-Website/addProducts"
            element={
              <AddProducts
                changeState={this.changeState}
                onSubmit={this.onSubmit}
                id={this.state.id}
                name={this.state.name}
                price={this.state.price}
                brand={this.state.brand}
                image={this.state.image}
                discardChanges={this.discardChanges}
              />
            }
          />
          <Route
            path="/E-Commerce-Website/products/:id"
            element={
              <Details
                products={this.state.products}
                updateProduct={this.updateProduct}
                deleteProduct={this.deleteProduct}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
