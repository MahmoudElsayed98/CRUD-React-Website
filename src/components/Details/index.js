import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Laptop from "../../assets/image1.png";
// import Keyboard from "../../assets/image4.png";
import "./index.css";
export default function Details(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="details container p-4">
      {props.products.map((e) => {
        return Number(e.id) === Number(id) ? (
          <div className="w-100" key={Number(e.id)}>
            {localStorage.setItem("CurrentProduct", JSON.stringify(e))}
            {console.log(e)}
            {/* <div className="text-center p-2 display-6">Product ID : {e.id}</div> */}
            <div className="text-center p-1 detail">
              {/* Name : {""} */}
              {/* {localStorage.getItem("lastEditedProduct" + e.id) &&
              e.id ===
                JSON.parse(localStorage.getItem("lastEditedProduct" + e.id)).id
                ? JSON.parse(localStorage.getItem("lastEditedProduct" + e.id))
                    .name
                : e.name} */}
              {e.name}
            </div>
            <div className="text-center p-1 detail">
              {/* Brand :{" "} */}
              {/* {localStorage.getItem("lastEditedProduct" + e.id) &&
              e.id ===
                JSON.parse(localStorage.getItem("lastEditedProduct" + e.id)).id
                ? JSON.parse(localStorage.getItem("lastEditedProduct" + e.id))
                    .brand
                : e.brand} */}
              {e.brand}
            </div>
            <div className="text-center p-1 detail">
              {/* Price :{" "} */}
              {/* {localStorage.getItem("lastEditedProduct" + e.id) &&
              e.id ===
                JSON.parse(localStorage.getItem("lastEditedProduct" + e.id)).id
                ? "$" +
                  JSON.parse(localStorage.getItem("lastEditedProduct" + e.id))
                    .price
                : "$" + e.price} */}
              {"$" + e.price}
            </div>
            <div className="image mx-auto my-2">
              <img
                src={
                  props.products.map((e) => {
                    return e.id === Number(id) ? e.image : "";
                  })[e.id - 1]
                }
                alt={e.name}
                className="img-fluid d-block"
              />
            </div>
            <div className="mt-md-2 d-flex justify-content-center align-items-center flex-column-reverse flex-md-row">
              <button
                className="d-block btn btn-primary me-md-2 mt-md-0 mt-2 col-10 col-md-3 p-md-2"
                onClick={props.updateProduct}
              >
                Update Product
              </button>
              <button
                className="d-block btn btn-primary mt-2 me-md-2 mt-md-0 col-10 col-md-3 p-md-2"
                onClick={props.deleteProduct}
              >
                Delete Product
              </button>
            </div>
            <div className="mt-md-2 d-flex justify-content-center align-items-center flex-column-reverse flex-md-row">
              <button
                className="d-block btn btn-primary me-md-2 col-10 col-md-4 mt-md-0 mt-2 p-md-2"
                onClick={() => {
                  navigate("/CRUD-Website/products");
                  // localStorage.removeItem("CurrentProduct");
                }}
              >
                Return to Products Menu
              </button>
            </div>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}
