import React from "react";
import { useSelector } from "react-redux";
import Productcard from "./Productcard";

export default function Productlist() {
  const products = useSelector((state) => state.product);
  // console.log(products);
  return (
    <div class="productContainer" id="lws-productContainer">
      {products.length !== 0 ? (
        products.map((product) => (
          <Productcard product={product} key={product.data.id} />
        ))
      ) : (
        <div class="font-bold text-2xl">
          No Product Added. But You can Add Product
        </div>
      )}
    </div>
  );
}
