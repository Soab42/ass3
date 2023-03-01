import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementcp, decrementcp, deleted } from "../redux/cart/actions";
// import { deccount, inccount } from "../redux/product/actions";
export default function Minicard() {
  const cartproduct = useSelector((state) => state).cart;
  const dispatch = useDispatch();
  // console.log(cartproduct);

  const incrementbtn = (id, count) => {
    dispatch(incrementcp(id, count));
  };
  const decrementbtn = (id, count) => {
    dispatch(decrementcp(id, count));
  };
  const removecart = (id) => {
    dispatch(deleted(id));
  };

  return cartproduct.map(
    ({ name, catagory, price, imgurl, count, id, cart }) => {
      const tcart = cartproduct
        .filter((cart) => cart.id === id)
        .reduce((total, cart) => {
          return total + cart.cart;
        }, 0);
      // console.log(tcart);
      return (
        <div class="cartCard" key={id}>
          <div class="flex items-center col-span-6 space-x-6">
            {/* <!-- cart image --> */}
            <img class="lws-cartImage" src={imgurl} alt={name} />
            {/* <!-- cart item info --> */}
            <div class="space-y-2">
              <h4 class="lws-cartName">{name}</h4>
              <p class="lws-cartCategory">{catagory}</p>
              <p>
                BDT <span class="lws-cartPrice">{price}</span>
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
            {/* <!-- amount buttons --> */}
            <div class="flex items-center space-x-4">
              <button
                class="lws-incrementQuantity"
                disabled={tcart === count}
                onClick={() => incrementbtn(id, cart)}
              >
                <i class="text-lg fa-solid fa-plus"></i>
              </button>
              <span class="lws-cartQuantity">{cart}</span>
              <button
                class="lws-decrementQuantity"
                disabled={cart === 1}
                onClick={() => decrementbtn(id, cart)}
              >
                <i class="text-lg fa-solid fa-minus"></i>
              </button>
            </div>
            {/* <!-- price --> */}
            <p class="text-lg font-bold">
              BDT <span class="lws-calculatedPrice">{cart * price}</span>
            </p>
          </div>
          {/* <!-- delete button --> */}
          <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
            <button class="lws-removeFromCart" onClick={() => removecart(id)}>
              <i class="text-lg text-red-400 fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      );
    }
  );
}
