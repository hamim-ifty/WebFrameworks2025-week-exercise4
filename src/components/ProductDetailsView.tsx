import React from "react";
import { Link, useParams } from "react-router";
import { getProductById } from "../products";

const ProductDetailsView = () => {
const { id } = useParams<{ id: string }>();
const product = getProductById(id);

  return (
    <div>
      <h2>{product.name}</h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <img src="http://via.placeholder.com/400x400" alt="Placeholder" />
        </div>
        <div>
          <h3>${product.price}</h3>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>In Stock: {product.stock} pcs</p>
          <p>Rating: {product.rating} / 5.0</p>
          <div style={{ marginTop: "20px" }}>
            <button>Add to Cart</button>{" "}
          </div>
          <div style={{ marginTop: "20px" }}>
            <Link to="/">Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsView;