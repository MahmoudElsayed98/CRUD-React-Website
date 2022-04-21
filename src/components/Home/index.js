import React, { Component } from "react";
import "./index.css";
import image from "../../assets/glossy-e-commerce.png";
import { LoremIpsum } from "react-lorem-ipsum";
export default class Home extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row align-items-center justify-content-center flex-column flex-md-row">
          <div className="col-8 col-md-6 col-lg-5 offset-lg-0">
            <img src={image} alt="ok" className="img-fluid" />
          </div>
          <div className="col-12 lead text-center col-md-6 col-lg-6 col-xl-6 ms-lg-1">
            <h1 className="text-uppercase lh-sm">
              All The Best <br /> You Can Get
            </h1>
            <LoremIpsum />
          </div>
        </div>
      </div>
    );
  }
}
