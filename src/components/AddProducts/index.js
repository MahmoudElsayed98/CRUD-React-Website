import React, { Component } from "react";
import "./index.css";
export default class AddProducts extends Component {
  render() {
    // console.log(document.querySelectorAll("input")[3].files[0].name);
    // console.log(this.props.image);
    return (
      <div className="form container">
        <form
          className="col-md-8 col-lg-8 container"
          onSubmit={this.props.onSubmit}
        >
          <div className="pt-4 d-flex align-items-center">
            <label htmlFor="name" className="d-block w-50">
              Product Name :
            </label>
            <input
              type="text"
              id="name"
              value={this.props.name}
              className="form-control"
              onChange={this.props.changeState}
            />
          </div>
          <div className="mt-4 d-flex align-items-center">
            <label htmlFor="price" className="d-block w-50">
              Product Price :
            </label>
            <input
              type="text"
              required
              value={this.props.price}
              id="price"
              className="form-control"
              onChange={this.props.changeState}
            />
          </div>
          <div className="mt-4 d-flex align-items-center">
            <label htmlFor="brand" className="d-block w-50">
              Product Brand :
            </label>
            <input
              type="text"
              id="brand"
              value={this.props.brand}
              className="form-control"
              onChange={this.props.changeState}
            />
          </div>
          <div className="mt-4 d-flex align-items-center">
            <label htmlFor="image" className="d-block w-50">
              Product Image :
            </label>
            <input
              type="file"
              alt="Image"
              id="image"
              required
              className="form-control"
              onChange={this.props.changeState}
            />
          </div>
          <input
            type="submit"
            className="form-control mt-4 btn-primary"
            value={
              localStorage.getItem("lastEditedProduct")
                ? "Update Product"
                : "Add Product"
            }
          />
        </form>
        <div className="col-md-6">
          {/* <button
            className="btn btn-danger form-control mt-2 discard"
            onClick={this.props.discardChanges}
          >
            Discard Changes
          </button> */}
        </div>
      </div>
    );
  }
}
