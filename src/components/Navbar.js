import React from "react";
import { useSelector } from "react-redux";
import LOGO from "../assest/images/logo.png";

export default function Navbar({ setshow }) {
  const homepagehandler = () => {
    setshow(true);
  };
  const cartpagehandler = () => {
    setshow(false);
  };
  const cart = useSelector((state) => state.cart);
  const carttotal = cart.reduce((x, y) => x + y.cart, 0);
  // console.log(cart);
  return (
    <nav class="bg-[#171C2A] py-4">
      <div class="navBar">
        <a href="/">
          <img src={LOGO} alt="LWS" class="max-w-[140px]" />
        </a>

        <div class="flex gap-4">
          <a href="#" class="navHome" id="lws-home" onClick={homepagehandler}>
            Home
          </a>
          <a href="#" class="navCart" id="lws-cart" onClick={cartpagehandler}>
            <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{carttotal}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
