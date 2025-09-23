import React from "react";
import { Link } from "react-router";
import styles from "./Product.module.css";

export default function Product({ id, imagePath, name, price }) {
  return (
    <div className={styles.product} key={id} data-testid={`product-${id}`}>
      <img src={imagePath} alt="Placeholder" />
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <Link to={`/products/${id}`}>View Details</Link>
      </div>
    </div>
  );
}