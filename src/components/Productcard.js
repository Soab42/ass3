import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { added } from "../redux/cart/actions";
import { inccount } from "../redux/product/actions";

export default function Productcard(product) {
  const { name, catagory, price, imgurl, count, id } = product.product.data;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const tcart = cart
    .filter((cart) => cart.id === id)
    .reduce((total, cart) => {
      return total + cart.cart;
    }, 0);
  // console.log(tcart);
  const addcart = (product) => {
    dispatch(added(product));
  };

  return (
    <div class="lws-productCard">
      <img class="lws-productImage" src={imgurl} alt="product" />
      <div class="p-4 space-y-2">
        <h4 class="lws-productName">{name}</h4>
        <p class="lws-productCategory">{catagory}</p>
        <div class="flex items-center justify-between pb-2">
          <p class="productPrice">
            BDT <span class="lws-price">{price}</span>
          </p>
          <p class="productQuantity">
            QTY <span class="lws-quantity">{count - tcart}</span>
          </p>
        </div>
        <button
          class="lws-btnAddToCart"
          onClick={() => addcart(product.product.data)}
          disabled={count === tcart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
